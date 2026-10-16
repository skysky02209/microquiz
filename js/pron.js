// 영어 용어 한글 읽기 사전 → 화면에 "Ortholog(오솔로그)"처럼 표시
window.PRON = {
// 약어 (글자 읽기)
'DNA':'디엔에이','RNA':'알엔에이','mRNA':'엠알엔에이','rRNA':'알알엔에이','tRNA':'티알엔에이','cDNA':'씨디엔에이','ncRNA':'엔씨알엔에이',
'PCR':'피씨알','NGS':'엔지에스','HGP':'에이치지피','DB':'디비','ID':'아이디','AI':'에이아이','GPS':'지피에스','bp':'베이스페어','kb':'킬로베이스','Mb':'메가베이스','PB':'페타바이트',
'ORF':'오알에프','RBS':'알비에스','GO':'지오','BP':'비피','MF':'엠에프','CC':'씨씨','DAG':'대그','HMM':'에이치엠엠','HSP':'에이치에스피','OLC':'오엘씨',
'SNV':'에스엔브이','SNP':'스닙','CNV':'씨엔브이','SV':'에스브이','DEG':'디이지','FDR':'에프디알','TPM':'티피엠','RPKM':'알피케이엠','FPKM':'에프피케이엠','RPK':'알피케이','RPM':'알피엠',
'SRA':'에스알에이','ENA':'이엔에이','DDBJ':'디디비제이','PDB':'피디비','EBI':'이비아이','NCBI':'엔씨비아이','INSDC':'인스디씨','KEGG':'케그','VFDB':'브이에프디비','HPC':'에이치피씨',
'GFF':'지에프에프','GFF3':'지에프에프 쓰리','GSC':'지에스씨','MIxS':'믹스','MINSEQE':'민시퀴','EnvO':'엔보','FGED':'에프지이디','ITS':'아이티에스','ITS1':'아이티에스 원','ITS2':'아이티에스 투',
'LUCA':'루카','GOE':'지오이','DDH':'디디에이치','SAR':'사르','RAST':'래스트','GATK':'개트케이','BLAST':'블라스트','BLASTN':'블라스트엔','BLASTP':'블라스트피','BLASTX':'블라스트엑스','TBLASTN':'티블라스트엔','BLAT':'블랫','HMMER':'허머',
'FAIR':'페어','FASTA':'패스타','FASTQ':'패스트큐','ASCII':'아스키','LOCUS':'로커스','FEATURES':'피처스','ORIGIN':'오리진','DEFINITION':'데피니션',
'ATG':'에이티지','TAA':'티에이에이','TAG':'티에이지','TGA':'티지에이','ATPase':'에이티피에이스','pH':'피에이치','LIMS':'림스','CATH':'캐스','PROSITE':'프로사이트','SMART':'스마트',
'K-BDS':'케이비디에스','BV-BRC':'비브이 비알씨','NMDC':'엔엠디씨','CDC':'씨디씨','FDA':'에프디에이','USDA':'유에스디에이','WFP':'더블유에프피','SAM':'샘','BAM':'뱀','STAR':'스타','HISAT2':'하이샛 투',
'N50':'엔 피프티','L50':'엘 피프티','Q30':'큐 써티','Q20':'큐 트웬티','Q10':'큐 텐','Q40':'큐 포티','Ti':'티아이','Tv':'티브이','Ti/Tv':'티아이 티브이','COG':'코그','UTR':'유티알','dUTP':'디유티피','ddNTP':'디디엔티피','NTP':'엔티피','dNTP':'디엔티피',
// 단어
'Read':'리드','Reads':'리즈','Contig':'콘티그','Annotation':'어노테이션','annotation':'어노테이션','Depth':'뎁스','Coverage':'커버리지','Ortholog':'오솔로그','Paralog':'패럴로그','Orthologous':'오솔로거스','Homolog':'호몰로그',
'Transition':'트랜지션','Transversion':'트랜스버전','InDel':'인델','Duplication':'듀플리케이션','Inversion':'인버전','Translocation':'트랜스로케이션','Speciation':'스페시에이션',
'Sanger':'생어','Illumina':'일루미나','Nanopore':'나노포어','PacBio':'팩바이오','MinION':'민아이온','Sequencing':'시퀀싱','Phred':'프레드','Quality':'퀄리티','Score':'스코어','score':'스코어','Bit':'비트','Raw':'로우',
'E-value':'이 밸류','P value':'피 밸류','Query':'쿼리','Hit':'히트','Word':'워드','Gap':'갭','Header':'헤더','Parent':'페어런트','Trimming':'트리밍','Mapping':'매핑','Alignment':'얼라인먼트','Reference':'레퍼런스','Variant Calling':'배리언트 콜링','Filtering':'필터링',
'K-mer':'케이머','De Bruijn':'드 브루인','Hybrid Assembler':'하이브리드 어셈블러','Assembly':'어셈블리','Tip':'팁','Bubble':'버블','Paired-end':'페어드 엔드','Single-end':'싱글 엔드','Long read':'롱 리드',
'Digitization':'디지타이제이션','Digitalization':'디지털라이제이션','Digital Transformation':'디지털 트랜스포메이션',
'Findable':'파인더블','Accessible':'액세서블','Interoperable':'인터오퍼러블','Reusable':'리유저블',
'Moore\'s Law':'무어스 로','GenBank':'젠뱅크','RefSeq':'레프섹','UniProt':'유니프롯','UniProtKB':'유니프롯 케이비','Swiss-Prot':'스위스프롯','TrEMBL':'트렘블','Pfam':'피팜','InterPro':'인터프로','InterProScan':'인터프로스캔','BioCyc':'바이오싸이크','MetaCyc':'메타싸이크','Gene3D':'진 쓰리디','MGnify':'엠지니파이','GISAID':'지사이드',
'PHI-base':'피에이치아이 베이스','Pathogen Detection':'패쏘젠 디텍션','Virus':'바이러스','Pathogens Portal':'패쏘젠스 포털','gcPathogen':'지씨 패쏘젠',
'Snakemake':'스네이크메이크','Nextflow':'넥스트플로','Galaxy':'갤럭시','Conda':'콘다','Docker':'도커','Singularity':'싱귤래리티','Git':'깃','Python':'파이썬','Rule':'룰','Wildcards':'와일드카드','Root':'루트',
'Prokka':'프로카','eggNOG-mapper':'에그녹 매퍼','Blast2GO':'블라스트 투 지오','Trimmomatic':'트리모매틱','Cutadapt':'컷어댑트',
'Gene Ontology':'진 온톨로지','Sequence Ontology':'시퀀스 온톨로지','Biological Process':'바이올로지컬 프로세스','Molecular Function':'몰레큘러 펑션','Cellular Component':'셀룰러 컴포넌트','GO Slims':'지오 슬림스','is-a':'이즈 어','part-of':'파트 오브','regulates':'레귤레이츠',
'Ab initio':'아브 이니시오','Homology':'호몰로지','Evidence':'에비던스','Codon bias':'코돈 바이어스','Codon':'코돈','Reading frame':'리딩 프레임','Shine-Dalgarno':'샤인-달가노','Kozak':'코작','Polycistronic':'폴리시스트로닉','Exon':'엑손','Intron':'인트론','Splicing':'스플라이싱','Splice':'스플라이스','Promoter':'프로모터','Pseudogene':'슈도진',
'Ortholog conjecture':'오솔로그 컨젝처','Annotation Transfer':'어노테이션 트랜스퍼','Guilt-by-association':'길트 바이 어소시에이션','Clustering':'클러스터링','Markov':'마르코프',
'RNA-seq':'알엔에이 섹','Microarray':'마이크로어레이','Probe':'프로브','isoform':'아이소폼','Biological Replicates':'바이올로지컬 레플리케이츠','Technical Replicates':'테크니컬 레플리케이츠','Batch effect':'배치 이펙트','Strand-specific':'스트랜드 스페시픽',
'log2 Fold Change':'로그 투 폴드 체인지','Fold Change':'폴드 체인지','Benjamini–Hochberg':'벤자미니-호크버그','Volcano plot':'볼케이노 플롯','False Positive':'폴스 포지티브','False positive':'폴스 포지티브','Enrichment':'인리치먼트','Bias':'바이어스','Randomization':'랜더마이제이션',
'Strain':'스트레인','Isolate':'아이솔레이트','pathovar':'패쏘바','forma specialis':'포르마 스페시알리스','Oomycetes':'우마이시츠','Stramenopiles':'스트라메노파일스','Phytophthora':'파이토프소라','Ascomycota':'아스코마이코타','Basidiomycota':'바시디오마이코타',
'Psychrophile':'사이크로파일','Mesophile':'메소파일','Thermophile':'써모파일','Hyperthermophile':'하이퍼써모파일','Acidophile':'애시도파일','Alkaliphile':'알칼리파일','Neutrophile':'뉴트로파일',
'Great Plate Count Anomaly':'그레이트 플레이트 카운트 어노멀리','Cyanobacteria':'시아노박테리아','Rickettsiales':'리케치알레스','Ether':'에테르','Ester':'에스터','Isoprenoid':'아이소프레노이드','Monophyletic':'모노파일레틱','Flanking':'플랭킹',
'Erwinia':'어위니아','amylovora':'아밀로보라','pyri':'피리','Fusarium':'푸사리움','oxysporum':'옥시스포룸','lycopersici':'리코페르시시','Saccharomyces':'사카로마이세스','cerevisiae':'세레비지애','Neurospora':'뉴로스포라','Penicillium':'페니실리움',
'rpoB':'알피오비','cpn60':'씨피엔 식스티','dnaK':'디엔에이케이','ldhA':'엘디에이치에이','ldhB':'엘디에이치비','β-tubulin':'베타 튜불린','TEF1':'티이에프 원','Fungal Barcoding Consortium':'펀걸 바코딩 컨소시엄',
'Dayhoff Atlas':'데이호프 아틀라스','Zuckerkandl':'주커칸들','Pauling':'폴링','Linné':'린네','Consortium':'컨소시엄','Society':'소사이어티','Salmonella':'살모넬라','Type III secretion system':'타입 쓰리 시크리션 시스템','Mycobacterium tuberculosis':'마이코박테리움 투버큘로시스','Rifampicin':'리팜피신',
'Agflation':'애그플레이션'
};
// 텍스트 노드에 읽기 붙이기 (SVG·입력창 제외, 이미 붙어 있으면 건너뜀)
(function(){
  const keys=Object.keys(window.PRON).sort((a,b)=>b.length-a.length);
  const escRe=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const re=new RegExp('(?<![A-Za-z0-9\\-])('+keys.map(escRe).join('|')+')(?![A-Za-z0-9])','g');
  const SKIP=new Set(['SCRIPT','STYLE','TEXTAREA','INPUT','CODE','svg','SVG','text','tspan','OPTION']);
  const DONE=new WeakSet();
  window.annotateKo=function(root){
    if(!root||window.__noPron) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
      for(let p=n.parentNode;p&&p!==root.parentNode;p=p.parentNode){ if(SKIP.has(p.nodeName)||(p.classList&&p.classList.contains('ko'))||p.namespaceURI==='http://www.w3.org/2000/svg') return NodeFilter.FILTER_REJECT; }
      if(DONE.has(n)) return NodeFilter.FILTER_SKIP; re.lastIndex=0; return re.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;}});
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const n of nodes){
      const t=n.nodeValue; re.lastIndex=0; let m,last=0; const frag=document.createDocumentFragment(); let changed=false; const seen=new Set();
      while((m=re.exec(t))){
        const end=m.index+m[0].length;
        // 이미 "(한글" 이 바로 뒤에 있으면 건너뛰기
        if(t.slice(end).replace(/^\s*/,'').startsWith('('+window.PRON[m[1]])||seen.has(m[1])) continue; seen.add(m[1]);
        {const tn=document.createTextNode(t.slice(last,end)); DONE.add(tn); frag.appendChild(tn);}
        const s=document.createElement('span'); s.className='ko'; s.textContent='('+window.PRON[m[1]]+')'; frag.appendChild(s);
        last=end; changed=true;
      }
      if(!changed){DONE.add(n); continue;}
      {const tn=document.createTextNode(t.slice(last)); DONE.add(tn); frag.appendChild(tn);}
      n.parentNode.replaceChild(frag,n);
    }
  };
})();
