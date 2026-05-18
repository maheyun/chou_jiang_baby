/**
 * 抽奖软件配置文件
 * 修改此文件即可更换礼物、提示音、背景音乐、结束语等
 * 所有文件路径相对于抽奖软件文件夹
 */

const CONFIG = {
  // ========== 结束语 ==========
  closingSound: '结束语/最终结束语.m4a',

  // ========== 整体背景音乐（主页循环播放） ==========
  ambientMusic: '整体背景音乐/整体背景音乐.flac',

  // ========== 彩蛋配置 ==========
  eggs: [
    {
      id: 1,
      order: 10,  // 显示顺序（数字越小越靠前），改这个数字即可调整彩蛋排列顺序
      color: '#FF6B6B',
      colorName: '珊瑚红',
      type: 'gift',
      displayName: '自然色美美哒气垫',
      fontStyle: 'beautiful', // 'beautiful' | 'serious' | 'normal'
      image: '图片/1/气垫.jpg',
      promptSound: '提示音/1/气垫.m4a',
      bgMusic: '背景音乐/1/气垫.flac',
      special: null
    },
    {
      id: 2,
      order: 1,
      color: '#FFA94D',
      colorName: '暖橙色',
      type: 'gift',
      displayName: '宝宝同款小黄帽防晒霜',
      fontStyle: 'beautiful',
      image: '图片/2/防晒霜.png',
      promptSound: '提示音/2/防晒霜.m4a',
      bgMusic: '背景音乐/2/防晒霜.flac',
      special: null
    },
    {
      id: 3,
      order: 2,
      color: '#FFD43B',
      colorName: '金黄色',
      type: 'gift',
      displayName: '情书',
      fontStyle: 'serious',
      image: '图片/3/情书.jpg',
      promptSound: '提示音/3/情书.m4a',
      bgMusic: '背景音乐/3/情书.flac',
      special: {
        type: 'loveLetter',
        buttons: [
          { text: '不想，跳过', response: '不可以哟，mua', action: 'retry' },
          { text: '我好喜欢你，当然想听了', response: null, action: 'continue' }
        ]
      }
    },
    {
      id: 4,
      order: 3,
      color: '#69DB7C',
      colorName: '翠绿色',
      type: 'gift',
      displayName: '代替我一直在你身边',
      fontStyle: 'beautiful',
      image: '图片/4/拍拍灯.jpg',
      promptSound: '提示音/4/拍拍灯.m4a',
      bgMusic: '背景音乐/4/拍拍灯.flac',
      special: null
    },
    {
      id: 5,
      order: 9,
      color: '#4DABF7',
      colorName: '天蓝色',
      type: 'gift',
      displayName: '神秘大奖',
      fontStyle: 'beautiful',
      image: '图片/5/通用图片.jpg',
      promptSound: '提示音/5/神秘大奖.m4a',
      bgMusic: '背景音乐/5/神秘大奖.flac',
      special: null
    },
    {
      id: 6,
      order: 4,
      color: '#9775FA',
      colorName: '紫罗兰',
      type: 'punishment',
      displayName: '女友力',
      fontStyle: 'normal',
      image: ['图片/6/蹲起.png', '图片/6/蹲起(女孩背男孩).png'],
      promptSound: '提示音/6/蹲起.m4a',
      bgMusic: '背景音乐/6/蹲起.m4a',
      special: {
        type: 'girlfriendPower',
        loopPrompt: true,
        buttons: [
          { text: '本宝宝力气大，自己做三个', action: 'accept' },
          { text: '找别人代替，不过要付出点代价', action: 'substitute' }
        ]
      }
    },
    {
      id: 7,
      order: 5,
      color: '#F783AC',
      colorName: '粉红色',
      type: 'punishment',
      displayName: '在心中',
      fontStyle: 'beautiful',
      image: ['图片/7/摆poss.png', '图片/7/摆poss2.png'],
      promptSound: '提示音/7/poss.m4a',
      bgMusic: '背景音乐/7/poss.flac',
      special: {
        type: 'posePhoto',
        loopPrompt: true,
        pickCount: 2 // 每次弹出几个pose选项
      }
    },
    {
      id: 8,
      order: 6,
      color: '#63E6BE',
      colorName: '青碧色',
      type: 'punishment',
      displayName: 'look my 0_0',
      fontStyle: 'normal',
      image: [
        '图片/8/微信图片_20260515000651_189_95.jpg',
        '图片/8/微信图片_20260515000805_190_95.jpg',
        '图片/8/微信图片_20260515000820_191_95.jpg',
        '图片/8/微信图片_20260515000836_192_95.jpg',
        '图片/8/微信图片_20260515000927_193_95.jpg',
        '图片/8/微信图片_20260515001015_194_95.jpg'
      ],
      promptSound: '提示音/8/30s.m4a',
      bgMusic: '背景音乐/8/对视.flac',
      special: null
    },
    {
      id: 9,
      order: 7,
      color: '#FF8787',
      colorName: '浅红色',
      type: 'punishment',
      displayName: '小秘密',
      fontStyle: 'normal',
      image: '图片/9/照片抽取.png',
      promptSound: '提示音/9/照片.m4a',
      bgMusic: '背景音乐/9/照片.flac',
      special: null
    },
    {
      id: 10,
      order: 8,
      color: '#E599F7',
      colorName: '淡紫色',
      type: 'punishment',
      displayName: '三行情诗',
      fontStyle: 'normal',
      image: '图片/10/三行情书.jpg',
      promptSound: '提示音/10/三行情诗.m4a',
      bgMusic: '背景音乐/10/三行情诗.mp3',
      special: {
        type: 'lovePoem',
        loopPrompt: true,
        buttons: [
          { text: '本宝宝自己写', action: 'write' },
          { text: '给宝宝点提示，这是命令', action: 'template' }
        ]
      }
    }
  ],

  // ========== 摆poss照相 - 姿势库 ==========
  // probability 控制每个pose被抽中的相对概率（数值越大越容易被抽中）
  poses: [
    {
      id: 1,
      name: '考拉抱',
      icon: '💪',
      category: '力量型',
      probability: 1,
      description: '一方跳到另一方身上，双腿盘住对方的腰，双臂搂住脖子。被抱的人要单手托住对方，另一只手举手机自拍。',
      challenge: '坚持10秒不能掉下来，同时两人都要看镜头笑。',
      effect: '特别亲密，展示信任感和男友力。',
      bonus: '如果体力不支，会有一系列"挣扎"连拍，反而是最好笑的素材。'
    },
    {
      id: 2,
      name: '错位创意照',
      icon: '🎭',
      category: '搞怪型',
      probability: 1,
      description: '利用远近错位，制造搞笑效果。比如一人在远处站着，另一人在近处伸出手掌，看起来像是把对方"托"在手心里。',
      challenge: '必须调整到刚好卡上位置，拍出以假乱真的效果。',
      effect: '极其有趣，发朋友圈必获赞。',
      bonus: '可随机指定错位主题（如"吃掉你"、"捏住你"）。'
    },
    {
      id: 3,
      name: '海报式剪影',
      icon: '🎬',
      category: '浪漫型',
      probability: 1,
      description: '找一面白墙或窗前逆光。两人侧身靠近，鼻尖对鼻尖但不要碰到，形成一个即将亲吻的剪影轮廓。',
      challenge: '必须保持3秒不动（用延时拍摄），中间不能笑场或碰到对方。',
      effect: '氛围感拉满，像电影海报，适合打印出来留念。',
      bonus: '额头贴额头，闭眼微笑也是经典版本。'
    },
    {
      id: 4,
      name: '双人对称pose',
      icon: '🪞',
      category: '镜像型',
      probability: 1,
      description: '两人面对面或背对背，做完全相同的动作，形成镜像对称。比如一起单手托腮、一起比耶但方向相反。',
      challenge: '动作必须高度同步，由延时拍照抓拍。不一致就重来。',
      effect: '极其协调或极其不协调，都很有看点。默契度一目了然。',
      bonus: '可借助镜子拍摄，制造画中画效果。'
    },
    {
      id: 5,
      name: '悬空坠落',
      icon: '😱',
      category: '惊吓型',
      probability: 1,
      description: '模仿"信任背摔"的微缩版。一方身体向后倾斜，另一方在身后做出"勉强接住"的夸张表情。',
      challenge: '必须抓拍到最真实的反应，不许摆拍假表情。',
      effect: '极其真实好笑，记录最自然的状态。',
      bonus: '属于独一无二的"黑照"收藏，或者反过来突然跳出来吓对方。'
    }
  ],

  // ========== 三行情诗 - 模板库 ==========
  poemTemplates: [
    {
      id: 1,
      full: '我在这个城市见过无数次日落，\n却只在那天你的眼睛里，\n看见星星如何学会燃烧。',
      fillIn: {
        text: '我在这个______见过无数次______，\n却只在那天你的______里，\n看见______如何学会______。',
        blanks: ['城市', '日落', '眼睛', '星星', '燃烧']
      },
      punctuation: {
        text: '我在这个城市见过无数次日落___\n却只在那天你的眼睛里___\n看见星星如何学会燃烧___',
        answers: ['，', '，', '。']
      }
    },
    {
      id: 2,
      full: '你递来的咖啡杯沿，\n有一圈淡淡的唇印，\n比任何誓言都烫。',
      fillIn: {
        text: '你递来的______，\n有一圈______的______，\n比任何______都______。',
        blanks: ['咖啡杯沿', '淡淡', '唇印', '誓言', '烫']
      },
      punctuation: {
        text: '你递来的咖啡杯沿___\n有一圈淡淡的唇印___\n比任何誓言都烫___',
        answers: ['，', '，', '。']
      }
    },
    {
      id: 3,
      full: '深夜的雨落在窗台，\n我想起你说过的那句"明天见"，\n原来最轻的承诺也有最重的回音。',
      fillIn: {
        text: '深夜的______落在______，\n我想起你说过的那句"______"，\n原来最______的______也有最______的______。',
        blanks: ['雨', '窗台', '明天见', '轻', '承诺', '重', '回音']
      },
      punctuation: {
        text: '深夜的雨落在窗台___\n我想起你说过的那句"明天见"___\n原来最轻的承诺也有最重的回音___',
        answers: ['，', '，', '。']
      }
    },
    {
      id: 4,
      full: '把月光折进信封里，\n寄给没有地址的你，\n风替我写了三行。',
      fillIn: {
        text: '把______折进______里，\n寄给没有______的你，\n______替我写了______。',
        blanks: ['月光', '信封', '地址', '风', '三行']
      },
      punctuation: {
        text: '把月光折进信封里___\n寄给没有地址的你___\n风替我写了三行___',
        answers: ['，', '，', '。']
      }
    },
    {
      id: 5,
      full: '你问我想去哪里，\n我说随便，\n其实是指有你的任何地方。',
      fillIn: {
        text: '你问我______，\n我说______，\n其实是指有你的______。',
        blanks: ['想去哪里', '随便', '任何地方']
      },
      punctuation: {
        text: '你问我想去哪里___\n我说随便___\n其实是指有你的任何地方___',
        answers: ['，', '，', '。']
      }
    }
  ]
};
