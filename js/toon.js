// 웹툰 에피소드 데이터
// 패널 종류: {t:'talk', bg, L:[who,face], R:[who,face], prop, cap, lines:[[who,text],...]}
//           {t:'board', title, html}   칠판 정리
//           {t:'fig', title, svg, cap} 그림 설명
// who: 'doc'(균박사) | 'kid'(새싹이),  face: smile | wow | sad | think | cool
window.TOON = [
{ep:1, w:1, title:'미생물에도 이름표가 있다', sub:'분류 · 진화 · DNA 바코드', color:'#43a047', emoji:'🏷️',
 quiz:['병원형','난균류','16S rRNA 유전자','세포내공생설','Great Plate Count Anomaly'],
 memo:['pv.(병원형)=세균 / f. sp.(기주특화형)=곰팡이·난균','난균은 곰팡이 아님 → 부등편모류(미역 친척)','바코드: 세균 16S(97%) / 곰팡이 ITS'],
 panels:[
 {t:'talk',bg:'#e8f5e9',L:['kid','sad'],R:['doc','smile'],prop:'📚😵',cap:'시험 1주 전, 도서관',lines:[['kid','선배… 미생물 이름이 너무 길어요. Erwinia amylovora pv. pyri 이게 다 뭐예요?'],['doc','걱정 마! 사람 이름이랑 똑같아. 오늘은 <b>이름표 읽는 법</b>부터 가자.']]},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','think'],prop:'🪪',lines:[['doc','<b>이명법</b> = 성 + 이름. 미생물은 <b>속명 + 종명</b>이고, 항상 <i>기울여서</i> 써. 린네가 만들었지.'],['kid','아~ 홍길동처럼 Erwinia(성) amylovora(이름)!']]},
 {t:'board',title:'종 아래의 이름표 4종',html:`<table><tr><th>이름</th><th>뜻</th></tr>
 <tr><td>균주 Strain</td><td>세포 1개에서 나온 순수 집단</td></tr>
 <tr><td>분리주 Isolate</td><td>자연에서 막 분리한 집단</td></tr>
 <tr><td class="hl">병원형 <b>pv.</b></td><td class="hl"><b>세균</b>을 병원성으로 구분</td></tr>
 <tr><td class="hl">기주특화형 <b>f. sp.</b></td><td class="hl"><b>곰팡이·난균</b>을 기주로 구분</td></tr></table>
 <p class="tip">💡 "<b>p</b>v는 <b>박</b>테리아(세균), <b>f</b>.sp는 <b>f</b>ungi(곰팡이)"</p>`},
 {t:'talk',bg:'#e3f2fd',L:['kid','wow'],R:['doc','smile'],prop:'🍄❓🌊',lines:[['kid','고추역병균 Phytophthora는 곰팡이죠? 실처럼 생겼던데.'],['doc','함정! <b>난균류</b>는 겉모습만 곰팡이야. 유전자를 보니 <b>미역·규조류</b> 친척인 <b>부등편모류(Stramenopiles)</b>였어.']]},
 {t:'board',title:'세포벽으로 구별하기',html:`<table><tr><th></th><th>세포벽</th><th>특징</th></tr>
 <tr><td>세균</td><td class="hl">펩티도글리칸</td><td>두께로 그람 +/−</td></tr>
 <tr><td>고세균</td><td class="hl">펩티도글리칸 없음</td><td>막이 <b>Ether</b> 결합, 극한환경</td></tr>
 <tr><td>곰팡이</td><td class="hl">키틴</td><td>자낭균(75%) · 담자균(버섯, 포자 4개)</td></tr></table>`},
 {t:'fig',title:'생명 역사 4컷 요약',svg:'timeline',cap:'LUCA(38~40억 년) → 시아노박테리아 산소 광합성(27억 년) → 산소 대발생(GOE) → 세포내공생으로 진핵세포 탄생'},
 {t:'talk',bg:'#fce4ec',L:['doc','cool'],R:['kid','wow'],prop:'🦠➡️🫧',lines:[['doc','큰 세포가 세균을 꿀꺽했는데 <b>소화를 안 하고 같이 살았어</b>. 그게 미토콘드리아(호기성 세균)랑 엽록체(시아노박테리아)야.'],['kid','증거는요?'],['doc','둘 다 <b>자기 DNA·리보솜</b>이 있고 <b>따로 분열</b>해. 시험에 증거 2개 나와!']]},
 {t:'board',title:'극한환경 미생물 (온도 · pH)',html:`<div class="temp"><span style="background:#90caf9">저온성 ≤15℃</span><span style="background:#a5d6a7">중온성 25~40℃</span><span style="background:#ffcc80">고온성 45~80℃</span><span style="background:#ef9a9a">초고온성 &gt;80℃</span></div>
 <p>pH: 호산성 <b>&lt;6</b> · 중성 6~8 · 호알칼리성 <b>&gt;9</b></p>`},
 {t:'talk',bg:'#ede7f6',L:['kid','think'],R:['doc','sad'],prop:'🔬🧫',lines:[['kid','현미경으로 보면 미생물이 엄청 많은데, 배지에서는 조금만 자라요.'],['doc','그게 <b>Great Plate Count Anomaly</b>! 대부분의 미생물은 <b>배양이 안 돼</b>. 지구 미생물 10¹²종 중 99.999%가 미발견이야.']]},
 {t:'talk',bg:'#e0f7fa',L:['doc','smile'],R:['kid','smile'],prop:'🛒📦',lines:[['doc','그래서 DNA로 종을 구분해. <b>DNA 바코드</b> = 마트 바코드처럼 짧은 서열로 종을 찍는 거야.'],['kid','좋은 바코드 조건은요?'],['doc','<b>종 안에서는 같고, 종끼리는 다르고, 양옆은 보존</b>돼서 PCR이 잘 될 것!']]},
 {t:'fig',title:'세균은 16S, 곰팡이는 ITS',svg:'barcode',cap:'16S rRNA: 상동성 97% 이상이면 같은 종 · ITS: 18S와 28S 사이 (보조 마커: 세균 cpn60·rpoB / 곰팡이 β-tubulin·TEF1)'},
 {t:'talk',bg:'#fff3e0',L:['kid','wow'],R:['doc','cool'],prop:'🧬',lines:[['kid','교배로 종을 나누는 건 안 돼요?'],['doc','미생물은 <b>무성생식</b>이라 안 돼. 그래서 서열로 묶는 <b>계통학적 종 개념</b>을 써. (옛날 기준: DDH 70% 이상 = 같은 종)']]}
 ]},

{ep:2, w:2, title:'DNA를 읽는 기계의 진화', sub:'디지털화 · 시퀀싱 · 품질', color:'#1e88e5', emoji:'🧬',
 quiz:['Sanger Sequencing','Nanopore','Q30','Depth','FAIR 원칙'],
 memo:['Sanger(ddNTP) → Illumina(짧게 대량) → Nanopore(길게, 전압)','Q = −10log P, Q30 = 오류 0.1%','Depth=몇 번 읽었나 / Coverage=몇 % 읽었나'],
 panels:[
 {t:'talk',bg:'#e3f2fd',L:['doc','cool'],R:['kid','think'],prop:'📸➡️💾',cap:'회사 비유로 보는 디지털 전환',lines:[['doc','종이 사진을 스캔하면 <b>Digitization(변환)</b>, 업무를 자동화하면 <b>Digitalization(개선)</b>, 회사를 통째로 바꾸면 <b>Digital Transformation(혁신)</b>.'],['kid','변환 → 개선 → 혁신!']]},
 {t:'board',title:'생명정보학 연표',html:`<ul class="tl"><li><b>1953</b> DNA 이중나선 발견</li><li><b>1955</b> Sanger, 인슐린 서열 완성</li><li><b>1962</b> 분자시계 (Zuckerkandl & Pauling)</li><li>Dayhoff Atlas = <b>최초의 단백질 DB</b> (65개)</li><li><b>1990~2003</b> 인간게놈프로젝트 (30억 염기)</li></ul>`},
 {t:'talk',bg:'#fffde7',L:['kid','wow'],R:['doc','smile'],prop:'🛑🧬',lines:[['kid','1세대 Sanger는 어떻게 읽어요?'],['doc','DNA를 복사하다가 <b>ddNTP</b>라는 브레이크를 밟아 멈춰. 길이별로 멈춘 조각을 색깔로 읽지. 정확하지만 <b>느리고 비싸</b>.']]},
 {t:'fig',title:'시퀀싱 1·2·3세대',svg:'seqgen',cap:'퍼즐 조각이 클수록(긴 Read) 맞추기 쉽다 → 반복서열 해결은 3세대가 강점'},
 {t:'talk',bg:'#e8eaf6',L:['doc','smile'],R:['kid','wow'],prop:'🖨️🖨️🖨️',lines:[['doc','2세대 <b>Illumina</b>는 복사기 수천만 대를 동시에 돌리는 느낌. <b>브릿지 증폭 + 가역적 종결자</b>.'],['kid','단점은요?'],['doc','한 번에 <b>150~300bp</b>밖에 못 읽어. 그래서 3세대 <b>Nanopore</b>는 DNA가 <b>구멍을 지나갈 때 전류 변화</b>로 수십 kb를 한 번에 읽어!']]},
 {t:'talk',bg:'#fce4ec',L:['kid','think'],R:['doc','cool'],prop:'💯',lines:[['kid','기계가 틀릴 수도 있잖아요?'],['doc','그래서 <b>Phred 점수</b>를 매겨. <b>Q = −10 log P</b>. 점수가 10 오를 때마다 실수가 1/10로 줄어.']]},
 {t:'board',title:'Phred 점수표 (계산 문제 단골)',html:`<table><tr><th>Q</th><th>틀릴 확률</th><th>정확도</th></tr><tr><td>Q10</td><td>1/10</td><td>90%</td></tr><tr><td>Q20</td><td>1/100</td><td>99%</td></tr><tr><td class="hl">Q30</td><td class="hl">1/1000 (0.1%)</td><td class="hl">99.9% ← NGS 기준</td></tr><tr><td>Q40</td><td>1/10000</td><td>99.99%</td></tr></table>`},
 {t:'talk',bg:'#e0f2f1',L:['doc','smile'],R:['kid','smile'],prop:'📖📖📖',lines:[['doc','책으로 치면 <b>Depth</b>는 "한 페이지를 <b>몇 번</b> 읽었나"(30x), <b>Coverage</b>는 "책의 <b>몇 %</b>를 읽었나"(95%)야.'],['kid','오 이건 안 헷갈리겠다!']]},
 {t:'talk',bg:'#f3e5f5',L:['kid','wow'],R:['doc','think'],prop:'📈💸',lines:[['kid','데이터가 엄청 많아졌다면서요?'],['doc','SRA는 <b>52PB</b>, GenBank는 <b>18개월마다 2배</b>. 비용은 1억 달러 → 500달러로 <b>무어의 법칙보다 빠르게</b> 떨어졌어.']]},
 {t:'fig',title:'데이터 관리 FAIR 원칙',svg:'fair',cap:'Findable 찾을 수 있게 · Accessible 접근 가능 · Interoperable 표준으로 호환 · Reusable 다시 쓸 수 있게'}
 ]},

{ep:3, w:3, title:'파일에도 형식이 있다', sub:'FASTA · FASTQ · GFF · 메타데이터', color:'#fb8c00', emoji:'📄',
 quiz:['FASTQ','GFF','메타데이터','MIxS','MINSEQE'],
 memo:['FASTA = > 이름 + 서열 / FASTQ = @ · 서열 · + · 품질 (4줄)','GFF = 9칸, 서열 없음, Parent 있음 / GenBank = 서열 있음(ORIGIN), 사람용','MIxS(GSC, 환경 17) / MINSEQE(FGED, 5요소)'],
 panels:[
 {t:'talk',bg:'#fff3e0',L:['kid','think'],R:['doc','smile'],prop:'🗂️',lines:[['kid','서열 파일은 그냥 ATGC 나열 아니에요?'],['doc','이름표를 붙이는 규칙이 있어. 제일 간단한 게 <b>FASTA</b>: <b>&gt;이름</b> 한 줄 + 서열. 숫자나 공백은 금지!']]},
 {t:'fig',title:'FASTA vs FASTQ',svg:'fastq',cap:'FASTQ는 서열 + 성적표(품질). 품질 문자는 ASCII 33(!)~126(~)'},
 {t:'talk',bg:'#ffebee',L:['doc','cool'],R:['kid','wow'],prop:'⚠️📊',lines:[['doc','함정 하나! 품질을 <b>평균</b>으로만 비교하면 안 돼. 평균은 높아도 틀린 염기가 더 많을 수 있거든.'],['kid','그래서 Illumina는 뒤쪽 품질 나쁜 부분을 잘라내는(Trimming) 거군요.']]},
 {t:'talk',bg:'#e8f5e9',L:['kid','think'],R:['doc','smile'],prop:'📋🌳',lines:[['kid','유전자 위치 정보는 어디 저장해요?'],['doc','<b>GFF</b>는 엑셀처럼 <b>탭으로 9칸</b>. ID랑 <b>Parent</b>로 "gene → mRNA → exon" 가계도를 적어. 대신 <b>실제 서열은 없어</b>.']]},
 {t:'board',title:'GFF vs GenBank',html:`<table><tr><th></th><th>GFF</th><th>GenBank</th></tr><tr><td>모양</td><td>탭 9칸</td><td>섹션 + 들여쓰기</td></tr><tr><td>서열</td><td class="hl">✗ 없음</td><td class="hl">✓ ORIGIN</td></tr><tr><td>계층</td><td>Parent로 명시</td><td>암묵적</td></tr><tr><td>장점</td><td>컴퓨터 처리 쉬움</td><td>사람이 읽기 쉬움</td></tr></table><p class="tip">GenBank 핵심 항목: <b>FEATURES</b>(유전자 위치·기능), <b>ORIGIN</b>(서열)</p>`},
 {t:'talk',bg:'#e3f2fd',L:['doc','smile'],R:['kid','wow'],prop:'📷📍',lines:[['doc','<b>메타데이터</b>는 사진의 촬영 정보 같은 거야. 언제·어디서·어떻게 찍었는지.'],['kid','토양 샘플이면 GPS, pH, 습도 같은 거요?'],['doc','정답! 미생물은 <b>환경에 따라 유전자가 달라져서</b> 메타데이터가 특히 중요해.']]},
 {t:'board',title:'메타데이터 국제 표준 2개',html:`<table><tr><th></th><th>MIxS</th><th>MINSEQE</th></tr><tr><td>만든 곳</td><td>GSC</td><td>FGED Society</td></tr><tr><td>핵심</td><td>환경 패키지 <b>17개</b> (EnvO)</td><td>NGS 재현성 <b>5요소</b></td></tr></table><p class="tip">⚠️ SRA 데이터 중 상세 프로토콜이 있는 건 <b>단 4%</b>!</p>`}
 ]},

{ep:4, w:4, title:'닮았다고 가족은 아니다', sub:'BLAST · 상동성 · 조립 · 변이', color:'#8e24aa', emoji:'🔍',
 quiz:['E-value','상동성','Paralog','N50','Transition'],
 memo:['E-value 작을수록 유의 (1e-5 미만)','유사성=수치 / 상동성=예·아니오','Ortholog=종 분화 / Paralog=종 안 중복','N50=절반 넘는 순간의 Contig 길이, L50=그 개수'],
 panels:[
 {t:'talk',bg:'#f3e5f5',L:['kid','think'],R:['doc','cool'],prop:'🔍📚',lines:[['kid','새 유전자를 찾으면 뭐부터 해요?'],['doc','<b>BLAST</b>로 "비슷한 거 있나?" 검색! 문장을 <b>단어로 쪼개고</b>, 같은 단어를 찾은 다음 <b>양옆으로 넓혀</b>가는 방식이라 빨라.']]},
 {t:'fig',title:'BLAST 작동 순서',svg:'blast',cap:'단어(Word) → Hit → 확장(HSP) → Gap 허용 → 점수(Bit score, E-value)'},
 {t:'talk',bg:'#fff8e1',L:['doc','smile'],R:['kid','wow'],prop:'🎲',lines:[['doc','<b>E-value</b>는 "이 정도 일치가 <b>우연히</b> 몇 번 나올까?"야. 작을수록 진짜 닮은 거지.'],['kid','그럼 Bit score는 클수록 좋고, E-value는 작을수록 좋다!']]},
 {t:'talk',bg:'#ffebee',L:['kid','wow'],R:['doc','cool'],prop:'👯',lines:[['kid','90% 비슷하면 상동성 90%죠?'],['doc','❌ 틀린 표현! <b>유사성</b>은 % 숫자, <b>상동성</b>은 "같은 조상이냐?" <b>예/아니오</b>만 있어. 닮은 사람이 다 친척은 아니잖아.']]},
 {t:'fig',title:'Ortholog vs Paralog',svg:'ortho',cap:'종이 갈라져서 생기면 Ortholog(다른 종), 한 종 안에서 복사돼 생기면 Paralog(같은 종)'},
 {t:'talk',bg:'#e8f5e9',L:['doc','smile'],R:['kid','think'],prop:'📰✂️',lines:[['doc','<b>조립</b>은 갈기갈기 찢긴 신문을 겹치는 글자로 이어 붙이는 거야.'],['doc','짧은 조각(Illumina)은 <b>De Bruijn 그래프</b>, 긴 조각(Nanopore)은 <b>OLC</b>로 맞춰.'],['kid','이어 붙인 큰 조각이 Contig!']]},
 {t:'fig',title:'N50 · L50 계산',svg:'n50',cap:'Contig를 긴 순서로 더해서 전체의 절반을 넘는 순간 → 그 Contig 길이가 N50, 몇 개 썼는지가 L50'},
 {t:'board',title:'변이의 크기별 이름',html:`<table><tr><th>이름</th><th>크기</th></tr><tr><td>SNV</td><td>염기 1개</td></tr><tr><td class="hl">SNP</td><td class="hl">SNV 중 집단 <b>1% 이상</b></td></tr><tr><td>InDel</td><td><b>1~50bp</b> 삽입·결실</td></tr><tr><td>구조적 변이</td><td>수백 bp 이상 (CNV, 역위, 전좌)</td></tr></table><p class="tip">순서: Variant Calling(GATK) → Filtering(Q, Depth, Ti/Tv 2~3) → Annotation</p>`},
 {t:'talk',bg:'#e3f2fd',L:['kid','think'],R:['doc','smile'],prop:'🔄',lines:[['kid','Transition이랑 Transversion 맨날 헷갈려요.'],['doc','<b>Transition</b>은 <b>같은 모양끼리</b> 바뀜(A↔G, C↔T), 더 흔해. <b>Transversion</b>은 큰 고리↔작은 고리로 <b>건너뛰는</b> 것!']]}
 ]},

{ep:5, w:5, title:'유전자 찾기 대작전', sub:'ORF · 유전자 예측 · GO · 도메인', color:'#e53935', emoji:'🕵️',
 quiz:['ORF','Polycistronic','Ab initio','Molecular Function','Ortholog conjecture'],
 memo:['ORF = ATG ~ 종결코돈, Reading frame 6개','원핵: RBS·Shine-Dalgarno·Polycistronic / 진핵: Kozak·Exon-Intron','GO = MF(무슨 일) · BP(어떤 과정) · CC(어디서)'],
 panels:[
 {t:'talk',bg:'#ffebee',L:['doc','cool'],R:['kid','think'],prop:'📝',lines:[['doc','DNA는 3글자씩 끊어 읽어. 문장의 시작 <b>ATG</b>부터 마침표 <b>TAA·TAG·TGA</b>까지가 <b>ORF</b>야.'],['kid','어디서부터 끊느냐에 따라 3가지, 반대 가닥까지 하면…'],['doc','<b>6개 Reading frame</b>! 시험 단골이야.']]},
 {t:'fig',title:'원핵 vs 진핵 유전자',svg:'genes',cap:'원핵은 쭉 이어진 코딩, 진핵은 Exon 사이에 Intron(광고)이 끼어 있어 예측이 어렵다'},
 {t:'board',title:'원핵생물 vs 진핵생물',html:`<table><tr><th></th><th>원핵 (세균)</th><th>진핵 (곰팡이)</th></tr><tr><td>시작 신호</td><td class="hl">RBS · Shine-Dalgarno</td><td class="hl">Kozak</td></tr><tr><td>mRNA</td><td><b>Polycistronic</b> (1개 = 단백질 여러 개)</td><td>Splicing 후</td></tr><tr><td>예측</td><td>쉬움</td><td>어려움 (RNA-seq 필요)</td></tr></table>`},
 {t:'talk',bg:'#fff8e1',L:['kid','wow'],R:['doc','smile'],prop:'🕵️📖🔬',lines:[['kid','유전자 예측은 어떻게 해요?'],['doc','탐정 3명이 있어. ① <b>Ab initio</b>: 증거 없이 서열만 보고 추리 ② <b>Homology</b>: 족보(참조 유전체)랑 비교 ③ <b>Evidence</b>: RNA-seq 같은 실제 증거로!']]},
 {t:'talk',bg:'#e8f5e9',L:['doc','smile'],R:['kid','think'],prop:'👔🏢',lines:[['doc','<b>Gene Ontology</b>는 직장인 소개처럼 3가지로 써.'],['doc','<b>MF</b> = 직무(ATPase 활성) · <b>BP</b> = 참여 프로젝트(DNA 복제) · <b>CC</b> = 근무지(핵, 세포막)'],['kid','구조는 그냥 나무 모양이에요?'],['doc','아니, 부모가 여럿일 수 있는 <b>DAG</b>야.']]},
 {t:'talk',bg:'#e3f2fd',L:['kid','think'],R:['doc','cool'],prop:'🧱🧱',lines:[['kid','단백질 도메인은요?'],['doc','<b>레고 블록</b>! 독립적으로 진화·기능하는 단위야. 도메인 사전이 <b>Pfam</b>(HMM 기반, 2만 개 이상).']]},
 {t:'board',title:'Annotation 도구',html:`<ul><li><b>Prokka</b> – 원핵생물 annotation, GFF3·GenBank로 출력</li><li><b>RAST</b> – 대사경로(Subsystem) 단위</li><li><b>eggNOG-mapper</b> – Orthologous group 활용</li><li><b>Blast2GO</b> – BLAST 결과로 GO 부여</li></ul>`},
 {t:'talk',bg:'#fce4ec',L:['doc','sad'],R:['kid','wow'],prop:'📢📢📢',lines:[['doc','<b>Annotation Transfer</b>는 비슷한 유전자의 기능을 빌려 쓰는 건데, 한 번 틀리면 <b>소문처럼 연쇄적으로 퍼져</b>.'],['kid','그래서 Paralog보다 <b>Ortholog</b>가 기능을 더 잘 유지한다는 <b>Ortholog conjecture</b>가 중요하군요!']]}
 ]},

{ep:6, w:6, title:'데이터 도서관과 자동 공장', sub:'데이터베이스 · 병원체 DB · 워크플로', color:'#00897b', emoji:'🏛️',
 quiz:['1차 데이터베이스','Swiss-Prot','PHI-base','Snakemake','Singularity'],
 memo:['1차(원재료): GenBank·ENA·DDBJ·SRA·PDB / 2차(요리): UniProt·Pfam·KEGG','Swiss-Prot=사람 검수 57만 / TrEMBL=자동 2.5억','Docker=Root 필요 / Singularity=HPC용'],
 panels:[
 {t:'talk',bg:'#e0f2f1',L:['doc','smile'],R:['kid','think'],prop:'🥕➡️🍲',lines:[['doc','<b>1차 DB</b>는 산지 직송 원재료 창고, <b>2차 DB</b>는 전문가가 요리한 음식이야.'],['kid','원재료는 GenBank, 요리는 UniProt!']]},
 {t:'board',title:'1차 vs 2차 데이터베이스',html:`<table><tr><th>1차 (원본)</th><th>2차 (큐레이션)</th></tr><tr><td>GenBank · ENA · DDBJ<br><small>= INSDC로 동기화</small></td><td>UniProtKB (Swiss-Prot + TrEMBL)</td></tr><tr><td>SRA (Read 저장)</td><td>Pfam · InterPro (도메인)</td></tr><tr><td>PDB (3차 구조)</td><td>KEGG · BioCyc (대사경로)</td></tr></table><p class="tip">RefSeq = GenBank에서 대표만 골라 재정리 → 딱 잘라 1차라고 하기 어려움</p>`},
 {t:'talk',bg:'#fff8e1',L:['kid','wow'],R:['doc','cool'],prop:'👩‍🔬🤖',lines:[['kid','Swiss-Prot이랑 TrEMBL 차이는요?'],['doc','<b>Swiss-Prot</b>은 사람이 하나하나 검수(약 57만 개, 신뢰도 높음), <b>TrEMBL</b>은 기계가 자동 정리(약 2억 5천만 개).']]},
 {t:'board',title:'병원체 특화 DB',html:`<table><tr><th>DB</th><th>한 줄</th></tr><tr><td class="hl">VFDB</td><td>세균 <b>병원성 요인</b></td></tr><tr><td class="hl">PHI-base</td><td><b>기주–병원체 상호작용</b>, 돌연변이 표현형</td></tr><tr><td>NCBI Pathogen Detection</td><td>집단감염·내성균 <b>감시</b></td></tr><tr><td>NCBI Virus</td><td>바이러스 변이 포털</td></tr><tr><td>Pathogens Portal</td><td>EBI, 감염병 200개</td></tr><tr><td>BV-BRC / gcPathogen</td><td>세균·바이러스 분석 / 중국 NMDC</td></tr></table><p class="tip">🌱 식물병원균(감자역병균) 연구 → <b>PHI-base + VFDB</b></p>`},
 {t:'talk',bg:'#e8eaf6',L:['doc','smile'],R:['kid','think'],prop:'🏭⚙️',lines:[['doc','분석을 매번 손으로 하면 실수가 나. 그래서 <b>워크플로</b>로 공장 컨베이어벨트를 만들어.'],['doc','<b>Snakemake</b>는 Python 기반, "입력 → 출력 → 명령" 규칙(Rule)을 <b>DAG</b>로 자동 실행해. 장점은 재현성·가독성·확장성!']]},
 {t:'talk',bg:'#fce4ec',L:['kid','think'],R:['doc','cool'],prop:'📦🚢',lines:[['kid','같은 코드인데 컴퓨터마다 결과가 달라요…'],['doc','<b>Conda</b>는 도구마다 방을 따로 줘서 싸움을 막고, <b>Docker</b>는 짐을 통째로 컨테이너에 싸서 어디서든 똑같이 돌려.'],['doc','그런데 Docker는 <b>Root 권한</b>이 필요해서 슈퍼컴퓨터에선 <b>Singularity</b>를 써!']]}
 ]},

{ep:7, w:7, title:'세포의 오늘 일기 읽기', sub:'RNA-seq · 정규화 · 차등발현', color:'#5e35b1', emoji:'📔',
 quiz:['전사체','Batch effect','TPM','FDR','Volcano plot'],
 memo:['생물학적 반복 > 기술적 반복, Batch effect → 무작위화','RPKM(Single)·FPKM(Paired) / TPM = 길이 먼저, 샘플 비교 최적','10,000 × 0.05 = 500개 가짜 → FDR(Benjamini–Hochberg)','Volcano: X=log2FC, Y=−log10 P'],
 panels:[
 {t:'talk',bg:'#ede7f6',L:['doc','smile'],R:['kid','think'],prop:'📕📖',lines:[['doc','유전체(DNA)가 요리책 전체라면, <b>전사체(RNA)</b>는 <b>지금 펼쳐 놓은 레시피</b>야. 세포가 지금 뭘 하는지 알 수 있지.'],['kid','그걸 읽는 게 RNA-seq!'],['doc','옛날엔 Probe에 의존하는 <b>Microarray</b>를 썼는데, RNA-seq는 <b>새 전사체까지</b> 찾아.']]},
 {t:'fig',title:'RNA-seq 8단계',svg:'rnaseq',cap:'설계 → 시퀀싱 → 품질관리 → 매핑 → 정량 → 차등발현 → 기능분석 → 시각화 (순서 문제 대비!)'},
 {t:'talk',bg:'#fff8e1',L:['kid','wow'],R:['doc','cool'],prop:'🐭🐭🐭',lines:[['kid','반복 실험은 같은 샘플을 여러 번 읽으면 되죠?'],['doc','그건 <b>기술적 반복</b>. 더 중요한 건 서로 다른 개체로 하는 <b>생물학적 반복</b>이야. 이게 없으면 DEG를 못 정해.']]},
 {t:'talk',bg:'#ffebee',L:['doc','think'],R:['kid','wow'],prop:'📅🧪',lines:[['doc','월요일 반은 A 시약, 화요일 반은 B 시약으로 하면? 생물 차이가 아니라 <b>날짜·시약 차이</b>가 섞여. 그게 <b>Batch effect</b>!'],['kid','그래서 샘플 순서를 <b>무작위</b>로 섞는구나.']]},
 {t:'talk',bg:'#e8f5e9',L:['doc','smile'],R:['kid','think'],prop:'🍕📏',lines:[['doc','긴 유전자는 길어서 Read가 많이 붙어. 그래서 <b>길이</b>랑 <b>총 Read 수</b>를 보정해.'],['doc','<b>RPKM</b>(Single-end)·<b>FPKM</b>(Paired-end)은 Read 수 먼저, <b>TPM</b>은 <b>길이 먼저</b> 나눠. TPM은 샘플마다 합이 같아서 <b>비교에 최고</b>!']]},
 {t:'board',title:'강의 예제 (그대로 나올 수 있음)',html:`<p>유전자 A: 2kb, Read 10 / 유전자 B: 4kb, Read 20</p><p><b>RPK</b> → A = 10÷2 = <b>5</b>, B = 20÷4 = <b>5</b></p><p class="tip">→ Read 수는 2배 차이지만 길이를 보정하면 <b>발현량은 같다!</b></p>`},
 {t:'talk',bg:'#fce4ec',L:['kid','think'],R:['doc','sad'],prop:'🎰',lines:[['kid','P값 0.05 미만이면 유의한 거죠?'],['doc','유전자 <b>10,000개</b>를 0.05로 검정하면 차이가 하나도 없어도 <b>500개</b>가 우연히 유의해. 로또 500장 당첨 같은 거지.'],['doc','그래서 <b>FDR</b>을 <b>Benjamini–Hochberg</b>로 보정해!']]},
 {t:'fig',title:'Volcano plot 읽는 법',svg:'volcano',cap:'오른쪽 위 = 크게 증가 + 유의 / 왼쪽 위 = 크게 감소 + 유의 / 아래 가운데 = 변화 없음'}
 ]}
];
