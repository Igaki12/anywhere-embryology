import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['レチノイン酸'],
      explanation:
        '体節を決定したり肺芽形成を誘導したりするシグナル物質。体節形成時では頭側で高濃度。',
    },
    {
      term: ['ソニックヘッジホッグ', 'SHH', 'Sonic Hedgehog'],
      explanation: '様々な役割を担うシグナル物質。（発生第三週以降）椎板を形成',
    },
    {
      term: ['椎板'],
      explanation:
        '沿軸中胚葉→椎板（発生4週頃）。胚盤葉上層→中胚葉（上皮間葉転換）→沿軸中胚葉（間葉上皮転換）がさらに上皮間葉転換して椎板を形成する。のちに椎骨や肋骨に分化する（胸骨は側板中胚葉由来）',
    },
    {
      term: ['指放線', 'ray'],
      explanation:
        '発生第六週前後に上肢・下肢芽の末端が扁平になり（手板・足板）、そこから指の間の部分がアポトーシスを起こすことで手足の先が形成される。指放線はその途中に形成される5個の肥厚部',
    },
    {
      term: ['プラコード', 'placode'],
      explanation:
        '感覚器や神経節を作る外胚葉の肥厚部。例えば鼻板・耳板・水晶体板。咽頭弓上プラコードがある。',
    },
    {
      term: ['神経堤', 'neural crest'],
      explanation:
        '神経ヒダの稜線上の先端にある神経上皮細胞が、神経管形成に伴って他の領域に遊走し脊髄神経節・顔面の骨や結合組織・心臓流出路の中隔・脳神経節の一部・メラノサイト・腸管神経節・副腎髄質など多くの構造を作る。神経堤細胞は発生毒性因子による障害を受けやすく、（特に耳に）顔面裂のある患児の多くに心臓異常を伴う理由を説明する根拠になる。',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
