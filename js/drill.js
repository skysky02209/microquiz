// 유형별 훈련 데이터
(function(){
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];}return a;};

// 계산 문제 생성기: {q, a(정답 문자열), opts?(4지선다) , unit?, exp(풀이)}
window.CALC = [
 function phred(){
  const Q=pick([10,20,30,40]); const P={10:'1/10 (10%)',20:'1/100 (1%)',30:'1/1,000 (0.1%)',40:'1/10,000 (0.01%)'};
  if(Math.random()<.5) return {tag:'Phred',q:`Phred 품질 점수가 Q${Q}일 때, 그 염기를 잘못 읽었을 확률은?`,a:P[Q],opts:shuf(Object.values(P)),exp:`Q = −10 log₁₀ P → P = 10^(−Q/10) = 10^(−${Q/10}) = ${P[Q]}. 점수가 10 오를 때마다 오류는 1/10.`};
  const acc={10:'90%',20:'99%',30:'99.9%',40:'99.99%'};
  return {tag:'Phred',q:`정확도 ${acc[Q]}에 해당하는 Phred 점수는?`,a:'Q'+Q,opts:['Q10','Q20','Q30','Q40'],exp:`정확도 ${acc[Q]} → 오류 ${P[Q]} → Q = −10 log₁₀(${P[Q].split(' ')[0]}) = ${Q}`};
 },
 function n50(){
  let n=R(4,6), L=[]; while(L.length<n){const v=R(2,12)*5; if(!L.includes(v)) L.push(v);} L.sort((a,b)=>b-a);
  const tot=L.reduce((a,b)=>a+b,0); let s=0,k=0; for(;k<L.length;k++){s+=L[k]; if(s>=tot/2) break;}
  const ask=Math.random()<.6?'N50':'L50';
  const steps=L.slice(0,k+1).join(' + ')+' = '+s;
  if(ask==='N50'){const opts=shuf([...new Set([L[k],L[0],L[Math.min(k+1,L.length-1)],L[L.length-1],Math.round(tot/2)])].slice(0,4)); if(!opts.includes(L[k])) opts[0]=L[k];
   return {tag:'N50',q:`Contig 길이가 ${shuf(L).join(', ')} kb일 때 N50은? (총 ${tot}kb)`,a:L[k]+'kb',opts:shuf(opts).map(v=>v+'kb'),exp:`긴 순서로 정렬: ${L.join(', ')} → 절반 ${tot/2}kb를 넘는 순간: ${steps} → 그때의 Contig = <b>${L[k]}kb</b> (L50 = ${k+1})`};}
  return {tag:'L50',q:`Contig 길이가 ${shuf(L).join(', ')} kb일 때 L50은? (총 ${tot}kb)`,a:(k+1)+'개',opts:['1개','2개','3개','4개'],exp:`긴 순서로 정렬: ${L.join(', ')} → ${steps} ≥ ${tot/2} → 필요한 Contig 수 = <b>${k+1}개</b> (N50 = ${L[k]}kb)`};
 },
 function fdr(){
  const N=pick([1000,2000,5000,10000,20000]), al=pick([0.05,0.01]); const v=Math.round(N*al);
  return {tag:'FDR',q:`유전자 ${N.toLocaleString()}개를 유의수준 ${al}로 각각 검정하면, 실제 차이가 없어도 우연히 유의하게 나올 것으로 기대되는 유전자 수는?`,a:v+'개',opts:shuf([v,v*2,Math.round(v/2),Math.round(N*0.1)].map(x=>x+'개')),exp:`${N.toLocaleString()} × ${al} = <b>${v}개</b>의 False positive → 그래서 FDR(Benjamini–Hochberg) 보정이 필요`};
 },
 function rpk(){
  const la=pick([1,2,4]), lb=pick([1,2,4,8]); const ra=la*R(2,10), rb=lb*R(2,10);
  const A=ra/la,B=rb/lb; const ans=A>B?'유전자 A':A<B?'유전자 B':'같다';
  return {tag:'TPM',q:`유전자 A: 길이 ${la}kb, Read ${ra}개 / 유전자 B: 길이 ${lb}kb, Read ${rb}개. 길이를 보정했을 때(RPK) 발현량이 더 높은 것은?`,a:ans,opts:['유전자 A','유전자 B','같다'],exp:`RPK = Read ÷ 길이(kb) → A = ${ra}÷${la} = ${A}, B = ${rb}÷${lb} = ${B} → <b>${ans}</b>`};
 },
 function depth(){
  const d=R(10,60), c=R(85,99);
  return Math.random()<.5
   ? {tag:'Depth',q:`특정 염기 위치에 Read ${d}개가 매핑되었다. 이것을 표현하는 방법은?`,a:`Depth ${d}x`,opts:shuf([`Depth ${d}x`,`Coverage ${d}%`,`Q${d}`,`N${d}`]),exp:`몇 번 읽혔는지 = <b>Depth</b>, 단위 x`}
   : {tag:'Coverage',q:`전체 유전체 중 ${c}%의 염기가 해독되었다. 이 지표는?`,a:`Coverage ${c}%`,opts:shuf([`Coverage ${c}%`,`Depth ${c}x`,`Q${c}`,`L${c}`]),exp:`전체 중 몇 %가 읽혔는지 = <b>Coverage</b>`};
 },
 function bit(){
  const b=pick([20,30,31,40]);
  return {tag:'Bit score',q:`Bit score가 ${b}일 때, 같은 점수의 정렬을 우연히 1번 볼 것으로 기대되는 서열 쌍의 수는?`,a:`2^${b}`,opts:shuf([`2^${b}`,`${b}^2`,`10^${b}`,`2×${b}`]),exp:`Bit score가 1 오를 때마다 필요한 DB 크기가 2배 → <b>2^${b}</b>개 (30이면 약 10억)`};
 },
 function tt(){
  const t=[['A','G','Transition'],['C','T','Transition'],['A','C','Transversion'],['G','T','Transversion'],['A','T','Transversion'],['G','C','Transversion']];
  const x=pick(t);
  return {tag:'변이',q:`${x[0]} → ${x[1]} 치환은 어떤 변이인가?`,a:x[2],opts:['Transition','Transversion'],exp:`퓨린(A,G)·피리미딘(C,T). 같은 종류끼리면 Transition, 종류가 바뀌면 Transversion → <b>${x[2]}</b>`};
 }
];

// 순서 맞추기
window.ORDERS = [
 {w:7,title:'RNA-seq 분석 8단계',items:['실험 설계','시퀀싱','품질 관리','정렬/매핑','발현량 정량','차등 발현 분석','기능·Enrichment 분석','시각화']},
 {w:4,title:'BLAST 작동 순서',items:['Query를 단어(Word)로 쪼개기','일치하는 Hit 찾기','양옆으로 확장(HSP)','Gap 허용 정렬','Bit score·E-value 계산']},
 {w:1,title:'생명 진화의 순서',items:['LUCA 등장','시아노박테리아 산소 광합성','산소 대발생(GOE)','세포내공생으로 진핵세포 탄생']},
 {w:2,title:'시퀀싱 기술 발전 순서',items:['Sanger (ddNTP)','Illumina (NGS)','Nanopore (Long read)']},
 {w:2,title:'디지털 전환 3단계',items:['Digitization (변환)','Digitalization (개선)','Digital Transformation (혁신)']},
 {w:3,title:'FASTQ 4줄 순서',items:['@ 서열 ID','DNA 서열','+ (ID 반복 또는 공란)','품질 문자열']},
 {w:4,title:'유전체 조립(De Bruijn) 절차',items:['Read 품질 확인·Trimming','K-mer 생성','그래프 구성(Node·Edge)','단순 경로 병합으로 Contig','팁·버블 제거']},
 {w:4,title:'변이 분석 파이프라인',items:['Reference Mapping','Variant Calling','Variant Filtering','Variant Annotation']},
 {w:4,title:'Reference Mapping 과정',items:['품질 검사·트리밍','참조 유전체 Indexing','정렬(Alignment)','중복 Read 표시','SAM/BAM 정렬·인덱싱']},
 {w:5,title:'기능 Annotation 파이프라인',items:['유전자 예측','BLAST 유사성 검색','도메인 검색·GO 매핑','전문가 큐레이션']},
 {w:6,title:'서열 분석 파이프라인',items:['품질 검사','필터링','정렬','변이 탐지','Functional annotation']},
 {w:7,title:'RNA 시퀀싱 실험 과정',items:['DNA 등 불필요한 분자 제거','RNA 조각내기','역전사로 cDNA 만들기','어댑터 부착','크기 선별','Paired-end 시퀀싱']},
 {w:7,title:'차등 발현 분석 단계',items:['귀무가설 설정','log2 Fold Change·P value 계산','다중검정 보정(FDR)']},
 {w:2,title:'시퀀싱 비용 변화',items:['2001년 약 1억 달러','2007년 약 100만 달러','2014년 약 1,000달러','2023년 약 500달러']}
];

// 나열하기 (모두 고르기)
window.LISTS = [
 {w:2,q:'FAIR 원칙 4가지를 모두 고르세요',ans:['Findable','Accessible','Interoperable','Reusable'],wrong:['Fast','Reliable','Integrated','Annotated']},
 {w:3,q:'MINSEQE가 정의한 메타데이터 요소를 모두 고르세요',ans:['생물학적 시스템·실험 변인','원시 서열 데이터와 품질 점수','처리된 데이터 요약','실험·샘플 간 관계','라이브러리 준비·분석 프로토콜'],wrong:['연구자 연봉','시료 판매 가격']},
 {w:5,q:'Gene Ontology의 3가지 구성요소를 고르세요',ans:['Biological Process','Molecular Function','Cellular Component'],wrong:['Sequence Ontology','Protein Domain','Environment Ontology']},
 {w:2,q:'생명정보 데이터 폭증의 원인을 모두 고르세요',ans:['시퀀싱 기술의 발전','메타유전체 연구 붐','정책과 공유 문화','정밀 연구의 필요성'],wrong:['시퀀싱 비용 증가','배양 기술의 퇴보']},
 {w:6,q:'목적에 맞는 DB 선택 기준을 모두 고르세요',ans:['연구 가설과 데이터 유형','데이터 출처와 범위','큐레이션 수준','접근성과 서비스','표준 준수와 재사용성'],wrong:['DB 로고 디자인','서버 위치 국가']},
 {w:6,q:'워크플로·파이프라인 설계 기본 원칙을 모두 고르세요',ans:['모듈화','명확한 입력·출력 정의','에러 처리와 로깅','확장성과 효율성','테스트와 검증'],wrong:['수동 파일 이동','단일 거대 스크립트']},
 {w:6,q:'Snakemake의 장점 3가지를 고르세요',ans:['재현성','가독성','확장성'],wrong:['Root 권한 필요','GUI 전용']},
 {w:1,q:'좋은 DNA 바코드의 조건을 모두 고르세요',ans:['종내 변이가 낮다','종간 변이가 높다','양옆(Flanking) 영역이 보존되어 있다'],wrong:['종내 변이가 높다','모든 생물에 하나로 통한다']},
 {w:1,q:'미생물에 적용하기 어려운 전통적 종 개념을 모두 고르세요',ans:['생물학적 종 개념','형태학적 종 개념','생태학적 종 개념'],wrong:['계통학적 종 개념']},
 {w:5,q:'유전자 예측 전략 3가지를 고르세요',ans:['Ab initio (이론적)','Homology 기반','Evidence 기반'],wrong:['Volcano 기반','Batch 기반']},
 {w:6,q:'1차 데이터베이스를 모두 고르세요',ans:['GenBank','ENA','DDBJ','SRA','PDB'],wrong:['Swiss-Prot','Pfam','KEGG']},
 {w:6,q:'2차 데이터베이스를 모두 고르세요',ans:['Swiss-Prot','TrEMBL','Pfam','InterPro','KEGG'],wrong:['GenBank','SRA','DDBJ']},
 {w:4,q:'구조적 변이(SV)의 종류를 모두 고르세요',ans:['큰 삽입/결실','Duplication(CNV)','Inversion','Translocation'],wrong:['SNP','Transition']},
 {w:5,q:'원핵생물 유전자의 특징을 모두 고르세요',ans:['RBS·Shine-Dalgarno 서열','Polycistronic mRNA','연속된 코딩 영역'],wrong:['Kozak 서열','Exon–Intron 구조']},
 {w:7,q:'RNA-seq 편향(Bias)의 원인 단계를 모두 고르세요',ans:['샘플 수집·보관','라이브러리 제작','시퀀싱 플랫폼'],wrong:['Volcano plot 그리기','논문 투고']},
 {w:2,q:'디지털화된 생명정보의 활용 분야를 모두 고르세요',ans:['병원체 감시','생명공학','식물 건강 증진','생물다양성'],wrong:['부동산 감정','주식 매매']},
 {w:1,q:'세포내공생설의 근거를 모두 고르세요',ans:['고유의 DNA를 가진다','고유의 리보솜을 가진다','세포 분열과 독립적으로 분열한다'],wrong:['펩티도글리칸 세포벽이 있다','키틴을 가진다']}
];

// 서술형
window.ESSAYS = [
 {w:1,q:'병원형(pathovar)과 기주특화형(forma specialis)의 차이를 설명하시오.',a:'병원형(pv.)은 특정 기주에 대한 병원성으로 구분하는 세균의 종내 분류이고, 주로 식물병원세균에 쓰인다. 기주특화형(f. sp.)은 형태 차이 없이 특정 기주에만 감염하는 특이성으로 구분하는 곰팡이·난균류의 분류군이다.',k:['세균','곰팡이','기주','병원성','pv','f. sp']},
 {w:1,q:'DNA 바코드의 정의와 요구 조건을 쓰고, 세균과 곰팡이의 표준 바코드를 쓰시오.',a:'DNA 바코드는 종을 신속하게 식별할 수 있는 표준화된 짧은 DNA 서열이다. 종내 변이가 낮고 종간 변이가 높으며, 양옆(Flanking) 영역이 보존되어 보편 프라이머로 PCR할 수 있어야 한다. 세균은 16S rRNA 유전자, 곰팡이는 ITS 영역을 쓴다.',k:['종내 변이','종간 변이','보존','16S','ITS']},
 {w:1,q:'세포내공생설을 설명하고 그 근거를 쓰시오.',a:'세포내공생설은 진핵세포의 미토콘드리아가 호기성 세균(Rickettsiales)에서, 엽록체가 시아노박테리아에서 유래했다는 이론이다. 근거로 두 소기관 모두 고유의 DNA와 리보솜을 가지며, 세포 분열과 독립적으로 분열한다.',k:['미토콘드리아','엽록체','시아노박테리아','DNA','리보솜','분열']},
 {w:2,q:'Sanger, Illumina, Nanopore 시퀀싱의 원리와 장단점을 비교하시오.',a:'Sanger는 ddNTP로 복제를 중단시켜 전기영동으로 읽는 1세대 방식으로 정확하지만 처리량이 낮고 비싸다. Illumina는 브릿지 증폭과 가역적 종결자로 수천만 클러스터를 동시에 읽어 처리량이 높고 저렴하지만 Read가 150~300bp로 짧다. Nanopore는 핵산이 구멍을 통과할 때의 전압 변화를 기록하는 3세대 방식으로 수십 kb 이상의 긴 Read를 얻어 반복서열 해결에 유리하다.',k:['ddNTP','브릿지','짧','전압','긴','Long']},
 {w:2,q:'Depth와 Coverage의 차이를 설명하시오.',a:'Depth는 특정 염기 위치가 몇 번 해독되었는지, 즉 몇 개의 Read가 매핑되었는지를 나타내며 30x처럼 표시한다. Coverage는 전체 유전체 중 해독된 영역의 비율로, 95%처럼 표시한다.',k:['몇 번','x','비율','%','전체']},
 {w:2,q:'FAIR 원칙 4가지를 쓰고 각각 설명하시오.',a:'Findable은 DOI 같은 고유 식별자와 풍부한 메타데이터로 찾을 수 있게 하는 것, Accessible은 표준 프로토콜로 접근할 수 있게 하는 것, Interoperable은 공통 표준을 사용해 다른 데이터와 호환되게 하는 것, Reusable은 출처와 실험 조건을 기록해 다른 연구자가 재사용할 수 있게 하는 것이다.',k:['Findable','Accessible','Interoperable','Reusable','메타데이터','표준']},
 {w:3,q:'GFF와 GenBank 형식의 차이를 3가지 이상 쓰시오.',a:'GFF는 탭으로 구분된 9개 필드로 구성되고 ID와 Parent 속성으로 계층 관계를 명시하지만 실제 서열은 포함하지 않아 FASTA와 연동해야 한다. GenBank는 LOCUS, FEATURES, ORIGIN 등 여러 섹션으로 서열과 주석을 한 파일에 담아 사람이 읽기 편하지만, Parent 관계가 명시되지 않고 자동 처리가 복잡하다.',k:['9','Parent','서열','ORIGIN','사람']},
 {w:3,q:'메타데이터의 정의와 미생물 연구에서 중요한 이유를 쓰시오.',a:'메타데이터는 서열 등 실험 데이터가 누가, 언제, 어디서, 어떻게, 왜 생성되었는지 설명하는 맥락 정보다. 미생물은 같은 종이라도 서식 환경에 따라 유전체와 기능이 달라지므로 서식지, 온도, pH, 염도 등의 메타데이터가 있어야 재현성과 정확한 해석, AI 학습이 가능하다.',k:['누가','언제','어디서','환경','재현성','pH']},
 {w:4,q:'유사성(Similarity)과 상동성(Homology)의 차이를 설명하시오.',a:'유사성은 두 서열이 얼마나 비슷한지를 나타내는 정량적 개념으로 수치로 표현한다. 상동성은 두 서열이 공통 조상에서 유래했음을 뜻하는 정성적 개념으로 예/아니오로만 표현한다. 유사성이 높아도 상동성을 단정할 수 없으며, 유사성은 E-value 등 통계 기준과 함께 상동성을 판단하는 근거로 쓰인다.',k:['정량','정성','공통 조상','수치','E-value']},
 {w:4,q:'Ortholog와 Paralog를 비교하여 설명하시오.',a:'Ortholog는 공통 조상 유전자가 종 분화(Speciation)를 거쳐 서로 다른 종에 존재하게 된 유전자로 대부분 같은 기능을 유지한다(예: 대장균과 고초균의 dnaK). Paralog는 한 종 안에서 유전자 중복(Duplication)으로 생긴 유전자로 중복 후 기능이 바뀔 수 있다(예: 대장균의 ldhA와 ldhB).',k:['종 분화','중복','다른 종','같은 종','기능']},
 {w:4,q:'De Bruijn 그래프 방식과 OLC 방식의 조립을 비교하시오.',a:'De Bruijn 그래프는 Read를 K-mer로 쪼개 노드와 엣지로 그래프를 만들고 오일러 경로로 유전체를 재구성하며, 짧은 Illumina Read 조립에 효율적이지만 반복서열이 k보다 길면 구분하지 못한다. OLC는 Read 사이의 겹침을 직접 이용해 K-mer 제한이 없어 PacBio·Nanopore 같은 긴 Read로 긴 반복서열도 구분할 수 있지만, 짧은 Read에서는 계산량이 급증한다.',k:['K-mer','짧','긴','반복','계산량']},
 {w:5,q:'원핵생물과 진핵생물의 유전자 예측 차이를 설명하시오.',a:'원핵생물은 대개 중첩되지 않은 연속된 코딩 영역으로 이루어지고 RBS(Shine-Dalgarno 서열)와 시작·종결 코돈만으로 ORF를 비교적 쉽게 찾을 수 있으며 Polycistronic mRNA를 가진다. 진핵생물은 Exon과 Intron으로 이루어져 Splicing 후에만 ORF가 정의되므로 단순 ORF 탐지로는 어렵고, Kozak 서열, Splice site, RNA-seq 증거 등을 통합해야 한다.',k:['연속','RBS','Polycistronic','Exon','Intron','Kozak']},
 {w:5,q:'Gene Ontology의 3가지 구성요소를 예와 함께 쓰시오.',a:'Biological Process는 세포 수준에서 일어나는 과정(DNA 복제, 세포분열), Molecular Function은 분자 수준에서 수행하는 활동(ATPase 활성, DNA 결합), Cellular Component는 분자나 복합체가 위치하는 세포 내 공간(세포질, 핵)이다.',k:['Biological Process','Molecular Function','Cellular Component','복제','결합','핵']},
 {w:6,q:'1차 데이터베이스와 2차 데이터베이스의 차이를 예와 함께 쓰시오.',a:'1차 데이터베이스는 실험으로 얻은 원본 서열·구조 데이터를 큐레이션 없이 저장하며 GenBank, ENA, DDBJ, SRA, PDB가 있다. 2차 데이터베이스는 1차 데이터를 전문가가 큐레이션·분석해 기능, 도메인, 진화 정보를 더한 것으로 UniProt(Swiss-Prot, TrEMBL), Pfam, InterPro, KEGG가 있다.',k:['원본','큐레이션','GenBank','UniProt','Pfam','KEGG']},
 {w:6,q:'Conda, Docker, Singularity의 역할과 차이를 쓰시오.',a:'Conda는 패키지와 실행 환경을 독립적으로 관리해 도구 간 충돌을 막는다. Docker는 소프트웨어·라이브러리·설정을 컨테이너로 묶어 어떤 환경에서도 같은 결과를 보장하지만 Root 권한이 필요해 공유 서버·HPC에서 제한될 수 있다. Singularity는 HPC 환경에 특화된 컨테이너로 Docker의 보안 문제를 극복하고 Docker 이미지와 호환된다.',k:['환경','컨테이너','Root','HPC','재현성']},
 {w:7,q:'Batch effect란 무엇이며 어떻게 줄이는지 쓰시오.',a:'Batch effect는 실험실 조건, 시약, 실험자, 날짜 등 실험적·기술적 요인에서 생기는 비생물학적 차이다. 샘플 처리 순서를 무작위화하고, 실험 설계와 통계 분석 단계에서 배치 요인을 고려해 완화한다.',k:['비생물학적','시약','날짜','무작위']},
 {w:7,q:'RPKM과 TPM의 계산 차이와, TPM이 샘플 비교에 유리한 이유를 쓰시오.',a:'RPKM은 총 Read 수로 먼저 나눠 RPM을 구한 뒤 유전자 길이(kb)로 나누고, TPM은 먼저 유전자 길이로 나눠 RPK를 구한 뒤 RPK 합으로 표준화한다. TPM은 모든 샘플에서 합이 같아 각 유전자가 차지하는 비율을 샘플 간에 직접 비교하기 편리하다.',k:['길이','먼저','RPK','합','비율']},
 {w:7,q:'다중검정 보정(FDR)이 필요한 이유를 예를 들어 설명하시오.',a:'RNA-seq에서는 수천~수만 개 유전자를 동시에 검정하므로, 예를 들어 10,000개를 유의수준 0.05로 검정하면 실제 차이가 없어도 약 500개가 우연히 유의하게 나온다(False positive). 따라서 Benjamini–Hochberg 같은 방법으로 FDR을 제어해야 한다.',k:['10,000','500','False positive','Benjamini','FDR']}
];
})();
