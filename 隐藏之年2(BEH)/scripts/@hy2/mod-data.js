import { ItemStack } from "@minecraft/server";

export const mainQuest = {
  system: {
    inactive: "myQuestAPI is inactive", // will be displayed if MyQuestAPI is not active
    enable: true, // Set to true to enable and false to disable
    tag: "op", // tag who can see quests when system[enable = false] || /tag @s add op
  },
  getIdentifier: {
    author: "星屹工作室", // Author Name
    title: "§l「隐藏之年²」主线任务", // Title
    description: "照着这本破旧的札记一步一步踏上旅途吧……", // Description
  },
  getQuest: {
    isNamespace: {
      isDefault: false, // Useless  for now. If true, will use default namespace
      // so you don't need to write namespace anymore
      namespace: "minecraft:", // Only work if "isDefault: true"
    },
    itemHand: "hy:quest_book",
    items: [
      "minecraft:stick",
      "hy:over_metal_ingot",
      "minecraft:iron_ingot",
      "minecraft:copper_ingot",
      "hy:copper_apple",
      "hy:iron_hammer",
      "hy:iron_crowbar",
      "hy:fuel_metal",
      "hy:nightmare_fuel_metal",
      "hy:steel_ingot",
      "minecraft:totem_of_undying",
      "hy:ruby",
      "hy:ruby_chestplate",
      "hy:ruby_bag",
      "hy:ruby_runes",
      "minecraft:obsidian",
      "minecraft:gold_ingot",
      "minecraft:ghast_tear",
      "minecraft:blaze_rod",
      "minecraft:ender_pearl",
    ],
    rewards: [
      ["hy:gold_coin", 5],
      ["hy:gold_coin", 12],
      ["hy:steel_ingot", 3],
      ["hy:gold_coin", 10],
      ["minecraft:golden_apple", 3],
      ["hy:steel_hammer", 1],
      ["hy:gold_coin", 15],
      ["hy:fuel_metal_stick", 5],
      ["hy:lab_table", 1],
      ["hy:gold_coin", 25],
      ["hy:emerald_boardsword", 1],
      ["minecraft:diamond", 5],
      ["minecraft:diamond", 8],
      ["minecraft:diamond", 10],
      ["minecraft:netherite_ingot", 5],
      ["hy:gold_coin", 45],
      ["minecraft:enchanted_golden_apple", 3],
      ["minecraft:netherite_upgrade_smithing_template", 1],
      ["minecraft:blaze_powder", 5],
      ["minecraft:ender_eye", 4],
    ],
  },
  getForm: {
    title: {
      enable: false, // Change to false to generate title automatically
      title: [
        // you don't need to fill this field if title[enable = true]
        "§d[序幕]§r 一切的开始",
        "§d[序幕]§r 金属代替品",
        "§d[序幕]§r 陨星之结晶",
        "§d[序幕]§r 红橙的光泽",
        "§d[序幕]§r 重金属超标",
        "§d[序幕]§r 最高效的工具",
        "§d[序幕]§r 「卑劣」的工具",
        "§d[序幕]§r 燃料与食物",
        "§d[序幕]§r 「不洁」的结晶",
        "§d[序幕]§r 坚硬的金属",
        "§d[序幕 最终任务]§r 终将于白纸间盛开的菡萏之花",
        "§d[淬血的刚玉]§r 沾满鲜血的宝石",
        "§d[淬血的刚玉]§r 瑰丽的甲胄",
        "§d[淬血的刚玉]§r 经验之袋",
        "§d[淬血的刚玉 最终任务]§r 力量与鲜血之歌",
        "§d[三界巡游者]§r 水火交融",
        "§d[三界巡游者]§r 金光闪闪",
        "§d[三界巡游者]§r 无风之泪",
        "§d[三界巡游者]§r 与火共舞",
        "§d[三界巡游者]§r 隔墙有眼",
      ],
    },
    description: {
      description: [
        "这是树上新生的枝桠，亦是你旅途的起点……",
        "「岩金」，由各种号称「无用之材」的石头凝结而成，不过所制成之物使用效果却意外的好？",
        "这些金属来自于星海之间，现如今成为了三界之间最常见、最可靠的物质",
        "大量存在于世界的金属，可以合成工具盔甲，不过容易因时间而「锈蚀」",
        "将铜锭与苹果捏合到一起，就会有神奇的事情发生……不过听说吃多了会中毒哦～",
        "挖掘石头最高效的工具，需要特殊的「木柄」才可以合成，但是挖掘矿石的话可能会有一点小困难……",
        "盗贼常用的工具，经常被用来撬走金属方块，不过一些特殊矿石需要撬棍才可以撬下来",
        "这是一种神奇的物质，既可以加工为棒状的燃料、也可以加工直接用来食用",
        "黑乎乎的外表下，蕴含着巨大的作用",
        "一种坚硬的金属，需要熔炼两次铁锭才可以获得……",
        "「不死图腾」，承载了旧人类终其历史所追寻的「不死」的祝福，可当地球亦或是三界的生灵得到它时才知道这并非祝福，而是「诅咒」……当你望向星空之时，是否感受到了在那之后存在着一种更强大的存在？人类千百年间的痛苦来源于此、也导致了大部分智慧的生灵如同含苞待放的菡萏般脆弱地陷入沉睡\n但请一定记住，那菡萏之花终将于这白纸般的三界盛放\n并以熊熊的烈火将其燃作灰烬\n\n序幕§d「于荒芜中启航」§r完",
        "这宝石本纯洁无瑕，直到某位术士的鲜血洒在了其上……",
        "用这来之不易的宝石打造一套甲胄吧",
        "你可以在红宝石地牢内击败红宝石怪物来获得这种袋子，当红宝石块与其相结合时，将会迸发出巨大的力量",
        "经过一番战斗，你击败了「红宝石之王」，旅行迈出了可喜可贺的第一步，可这远不是终点，在漫长的历史中，浩如烟海的强大存在被「迷失军团」封印于袋中，你需要逐步击败他们、得到他们的力量\n——至于下一步，向地底进发吧……\n\n第一章§d「淬血的刚玉」§r完",
        "将水与岩浆混合在一起或许有别样的物质产生？",
        "在大洞穴成为下界之前最为寻常的金属，现在已经变成了一种珍贵的金属",
        "据说是无风纪「旧人类」的冤魂，但直到如今三界都没有摸清其究竟遭遇了什么……",
        "这种炽热的生物本属人类，在「太古之战」后因没有即时搬迁到主世界而逐渐异化，而如今其成了你冒险路上必须经历的一个环节",
        "苍穹之上、星海之下有着什么呢……",
      ],
      complated: "已完成",
      notComplated: "未完成",
    },
    icon: {
      enable: false,
    },
    button: {
      back: "§l返回",
      check: "§l检查并提交",
      about: "§l关于",
    },
  },
};

export let modItemData = {
  bark: new ItemStack("hy:bark"),
  diamondBlockReward: new ItemStack("minecraft:diamond_block", 2),
  goldBlockReward: new ItemStack("minecraft:gold_block", 3),
  scrapReward: new ItemStack("minecraft:netherite_scrap"),
  templateReward: new ItemStack(
    "minecraft:netherite_upgrade_smithing_template",
  ),
  appleReward: new ItemStack("minecraft:enchanted_golden_apple", 5),
  letterDimension: new ItemStack("hy:letter_dimension"),
};

export const StoryTitle = {
  section0: "千年迷梦",
  section1: "诞生于毁灭的新生",
  section2: "探索这世间",
};

export const StoryData = {
  section0:
    "§l千年迷梦§r\n我自混沌中醒来，身边一无所有，\n砾石横生的陆地承接着我。\n家在何处，我想不起来；\n如何冲出这牢笼，我不知道。\n事已至此，我别无退路。\n誓要离开这里，找回遗失的记忆。\n\n莞尔风起，大地旧貌换新装，\n草木生、禽兽衍，\n思想渐被侵蚀，\n我在哪\n哪里就是我的故乡。\n\n§l智慧元年§r\n风起月落，智慧的粒子出现在世间，\n他们在空中起舞、在河流中沐浴、在草丛中栖息。\n天气交替，寒暑易节，\n仁厚的地母最终收留了他们，\n当强风吹来时，粒子组成了精妙的「人类」；\n当月光撒下时，粒子幻化为了强健的「不死之族」。\n两族，和谐相处；\n智慧，就此诞生。\n\n§l新朋友§r\n我虽当不了谜语人，\n却交了许多新朋友。",
  section1:
    "§l诞生于毁灭的新生§r\n两族在大洞穴内茹毛饮血、和睦相处。\n但一个月夜，背叛发生。\n风萧萧兮易水寒，壮士一去兮不复还。\n数名无辜的人类倒在了血泊之中，\n“洞穴内的资源即将耗尽，\n我这么做无非是为了我们两族！”\n\n战争一触即发。\n人虽有巧妙的大脑，但却难敌四肢发达的不死之族，\n于是，\n第一缕「火」在世界上生起，\n人类用它烤制食物、驱赶野兽。\n「工作台」在世界中放置，\n人类制作出「工具」、「武器」以捍卫自己孱弱的身躯。\n\n一道闪电，正中不死之族的巢穴，\n一瞬亮光，惊醒了睡梦中的人类。\n满目疮痍，两族即将毁于一旦，\n我也要埋葬自己与整个世间，\n——世间万物，都有属于自己的名字，\n我为自己取了一个名字「琉璃」，\n静候最后的时刻到来。\n可故事并没有结束，\n人类在即将毁灭之时带着我远走高飞，\n来到了一个洞穴之上的世界……\n\n§l朝日初现§r\n阳光撒下来，\n穿透积攒千年的乌云。\n清晨的露珠，\n浸润生来污浊的花朵。\n朝日，终将拨开雾霭。",
  section2:
    "§l新的世界§r\n「主世界」，新家的名字。\n平原之上，\n山脉河流点缀于此，\n飞鸟禽兽穿行林间。\n\n人类——\n撬走，\n貌似刚刚形成的「浅层矿石」、\n埋藏不知多久的「地心矿石」，\n建造起，\n地上归人居住的「村庄」、\n地下供鬼栖息的「祀城」，\n发现，\n物不美价却廉的「仿制材料」、\n既可以食用，又可以作为燃料的「燃金」\n\n——世上欣欣向荣，充盈着希望的光辉\n吗？\n\n夜深，\n灾难再次来袭，不死之族降临。\n睡梦中的人类再次被惊醒。\n「我们的前程，真是光明的吗？」\n\n§l随风而去吧§r\n时光如白驹过隙，\n我的老友逐渐随风消逝，\n而我恐怕也将步其后尘。\n“雨后人去楼也空”，\n我再也无法记录下这世界的一切。\n\n伫立于皎洁的月光下，\n我曾幻想宇宙可以告诉我，\n所有这世间所有未知的秘密。\n——但可惜这只是我的幻想罢了……\n\n门前窗边，挖好坟冢，\n我终将埋葬在这异乡，\n希愿你也能踏上冒险的征程，\n探索这未知的世间。\n\n【完】\n\n§l风又起§r\n春风又起，\n是新生的时节……",
};

export const LetterTitle = {
  section0: "三界巡视",
  section1: "淬血的刚玉",
  section2: "地底死城",
  section3: "时空匿藏",
  section4: "纪元·一",
  section5: "纪元·二",
  section6: "祀礼会",
  section7: "旧人类",
  section8: "掌舵者",
  section9: "假冒伪劣·一",
  section10: "假冒伪劣·二",
};

export const LetterData = {
  section0:
    "在这个世界中存在着三个相对独立的维度——§l「主世界」、「下界」、「末地」§r，\n其中下界位于世界的底部、末地漂浮于主世界的遥远高空。\n\n\n§l主世界§r：位于世界的中央，你的故乡，资源丰富、景色秀丽，可以发现各种矿藏、遗迹。但月光撒下时残存的「不死之族」会伺机行动意图伤害你们；\n\n§l下界§r：位于主世界之下，需要传送门到达，是人类和不死之族最初的居所。资源相对匮乏，在「远古之战」之后更是一片荒芜，但仍有残存的人类及不死之族逐渐适应炎热的环境并发生了变异，建立起了与现在主世界迥然不同的文明；\n\n§l末地§r：漂浮于主世界高空中的群岛，需要传送门到达，资源及其匮乏，在中央的大岛上生活着「末影龙」以及她的同类「末影人」，岛外有着不知何人修建的「末地城」",
  section1:
    "人类迁往主世界后不到百年，分化出了「灾厄之族」。而其中一名无名术士痴迷于传说中名为「经验」的黄绿色小球……\n\n春去秋来，他有一天在矿洞中发现了一种洁白的矿石，他不自觉的把手放在石上，倏忽间皮肉绽开，鲜血撒在了石头那光洁的表面上\n——「经验」的力量也顿时涌入他的身体，他原本破损的铁剑瞬间变成了充盈着「经验」与力量的「红宝石阔剑」，他可以自如的运用「经验」的力量召唤守卫、控制怪物，可与此同时他自己的大脑也在逐渐被经验的力量所侵蚀……被侵蚀的他就此离开了灾厄一族，运用经验的力量积累资源、开掘地牢。\n后来他彻底坠入深渊，在理智尚存的最后一刻自我封印在了「灾厄谜袋」之中，等待有能力的冒险者的到来……而据说「月蚀纪」后直到现在冒险家们探索世界、挖掘矿石获得的经验就是他力量的体现……\n此时，距离那场毁灭世界的「太古之战」仅仅四百年。",
  section2:
    "顺着矿道，我来到了这座死去的城市——去的时候一路畅通，回来的时候海水已经倒灌进去，火把和铁轨都被冲毁了。\n我讨厌地下城市，那里阴暗、逼仄、曲折而且诡异，灯照不亮那些仿佛有生命跳着蓝绿色光点的漆黑材料。尽管没有看到黑暗中繁衍滋生的不死之族，我还是举着盾牌，走几步插一支火把。\n「孩子们都还在睡觉，别给吵醒了。」\n是个老女人的声音，说话很标准，没有口音。我转过身，一个矮小削瘦、没穿盔甲的人站在我背后，她伸出一只空空的手，我便把绑着盾牌的手臂伸过去和她握手——皮包骨头的手过分地硌硬，手上的皮和带釉陶瓦一样光滑，没有战斗或生产留下来的老茧，看起来她的力气比我还大。\n我战战兢兢跟着走到一处幽蓝的营火旁坐下，我看到她方解石色的皮肤上勒出鲜明的骨头轮廓，不甚明亮的营火把上细下粗、强干弱枝的阴影投在被照成暗蓝色的凝灰岩壁上面。她突然开口：「地上的情况怎么样了？」\n「非常不好，农田都被上升的淹没了，我种的胡萝卜马铃薯都被抢走了。\n一到晚上，只要是没点灯的地方都会爬出不死族，我们只能躺在床上翻来覆去」\n「是这样啊，连树皮都吃光了吧？其实也好，我们那个时候可是连白天都会有不死族的啊——我想多少年之后，你们住的地方会变成沙砾掩埋的海底遗迹，包围你们的石山会盖上泥土，长出新的橡树、白桦树、云杉树、丛林树、樱花树......」\n「樱花？我没有见过什么樱花。」\n『那是一种粉红色的小花，我最重要的人之前经常送我这种花——这悲伤的陈年旧事不提也罢，这死城里遍布「幽匿催发体」，它们会让「幽匿」不断蔓延，而「监守者」会看护好我们的坟墓……』\n「我听不懂。」\n「你不用听懂，就像现在的我也不愿意去管那什么人类和不死族的战争，更不愿管某位背刺我的先生……」\n我眼前似乎冒出了一团黑雾——",
  section3:
    "一种罕见的现象，在一段时间内所有历史全部凭空消失、所有生灵失去对这段世界的记忆。这种奇观被不属于两族的存在称之为「隐藏之年」\n而据称，在这段消失的历史中，发生了一些「三星之中」的掌舵者不想让天空之下的众生所知晓的事……",
  section4:
    "§l无风纪§r\n1-2035\n\n那是一个没有风的世界……\n很久很久以前，「初之陆」被不同的部族所割据，两个千年后，来自于群星之中的「掌舵者」带来了风，无风的年代即「无风纪」便结束了\n可吹开了文明之窗的风，不久便影响到了「秩序之门」，世界因此分为三份，生灵也几乎消逝殆尽……\n「掌舵者」叹了口气，为这三个寂寞的世界默默送上祝福\n\n§l共生纪§r\n4000-8400\n这世界上终于有了一点生命。不久，生命的光辉就布满整个大洞穴之中\n当「掌舵者」的风吹来时，新的人类诞生了；而当月光撒下时，那永远不死的族群自地底钻出……\n在这之后，人类的领袖、「天赐王座」的主人主宰了这里千年。直到他的次子渐渐长大，雨细无声，「王座之主」暴毙而死，那名次子登上王座，却落得个「王座窃贼」的骂名……\n直到月光真正撒下的那天，「窃贼」被他所鄙视的不死之族所刺杀，「太古之战」就此拉开帷幕1-2035",
  section5: "", // WIP
  section6:
    "建立于新聚纪，据说是为了「超度」太古之战中死去的生灵而建立，掌握了「风之回响」的力量，后在地下建立了规模宏大的「祀城」\n灾厄诸战中，祀礼会的成员逐渐被「灾厄」的力量所侵蚀，「风之回响」的力量遭到侵蚀后变得更加强大与邪恶……被侵蚀的成员用这种力量帮助「迷失军团」与两族作战，战死后他们就葬于祀城之中，力量也随之消散\n而这种邪恶的力量，因战死的祀礼员越来越多逐渐聚集在祀城之中，后人称之为「幽匿」的力量",
  section7:
    "据说在两族诞生之前就存在数千年的族群，创建的文明在「无风纪」中达到鼎盛，在第一段隐藏之年中神秘的消失，现在的人类与其极其相似，但是寿命只有四十岁",
  section8:
    "来自于「三星之中」的存在，是「天赐王座」的主人，两族对其知之甚少。一方面是因为自身的神秘；另一方面是因为那位据称「永恒的存在」的消失……",
  section9:
    "人声一:我们开始？\n人声二: 开始了，克洛西耶先生，接下来我们说什么都会被记录下来\n克洛西耶:你们对那些僵尸做了什么?抓它们费了我老大的劲，你知道杀死一只僵尸很容易一一小的或许有点难度，但抓一只就难了，你们研究出什么有意思的成果没有?\n人声二:您知道怎么防止不死之族爬回地底吗?\n克洛西耶:什么?\n人声二:用「名字」，有了「名字」，就不会被「遗忘」，没有「遗忘」就不会「消失」。您，克洛西耶，资深怪物猎人，我们二位只是没有名字的研究员罢了，我们相信您和别的资深怪物猎人不一样。\n克洛西耶(干笑):这种话还是少讲，我倒是被所谓有「名字」的仿制工具坑过。\n人声二:克洛西耶先生，以下是我们研究僵尸的资料中的一段：\n\n僵尸在死亡时常会掉落仿制铁锭。然而，僵尸并不会携带仿制铁工具，它们一般手持铁剑、铁镐、铁锨\n这是另一段：\n\n僵尸会穿戴装备，通常是皮甲、链甲、金甲或者铁甲，但决不会穿戴铜甲，除非你把其送给它们。\n\n相当奇怪的一点是：铜是一种相当易得且大量的金属，还是仿制铁锭的原料。请问克洛西耶先生是否目睹过例外情况?\n克洛西耶:没有，你说的这两点，我没有见过例外，虽然我的祖先在太古之战前和不死族生活在一起，但也资料流传下来。\n克洛西耶:不过，穿着钻石甲的僵尸我倒是见过两三次(笑)\n克洛西耶: 你们找到我肯定因为我有经验，那我直说吧，我觉得僵尸是一种很聪明的生物，我的祖先在「共生纪」时和他们玩游戏我丢给它们上好的胸甲和剑，之后再和他们战斗。当时我的祖先就发现了僵尸会换下相对劣质的装备捡起更好的，我觉得僵不用仿制品是不想受到来自次品的伤害吧……\n克洛西耶:至于铜的情况，我不清楚， 但它们至少不厌恶铜……或许是因为「掌舵者」忘给他们加这个设定了？\n人声一:［模糊不清］\n\n「笔记到此结束，你推测出还有下一半遗失在哪里」",
  section10:
    "人声一:其实我们用那些僵尸做了实验。我们往这位可爱的小伙子手里塞了把漂亮的仿铁剑，他把20个喝了神龟药水的傻子村民变成白烟的时间比他用货真价实铁剑的对照组用的还要短。\n人声一:由此可见，僵尸不受仿制伤害\n(短暂的沉默)\n克洛西耶:我不懂。\n\n人声二:你记得传说吗?\n克洛西耶:传说?\n人声一:「洞穴内的资源即将耗尽」是太古之战战争的原因。人类来到主世界后发现了「物不美价却廉的仿制材料」，可事实上，不死之族比我们更懂仿制材料，我们的实验对象用那把剑用得很熟练\n人声二:可当我拿出一把同样的剑和他比划时，我的手却总是莫名奇妙地被割到。您不是认为这是诅咒吗？\n克洛西耶:你有点语无伦次，我觉得我们可以先把传说放到一边，你刚才说，比如我用仿制材料的斧头砍树虎口会震出血，镐子挖石头的时候石子会溅到身上\n克洛西耶:你说这是「诅咒」?\n(又是短暂的沉默)\n人声一:好了，克洛西耶先生，感谢您的配合\n克洛西耶:但愿你们能早日找出所有流通在市场上的仿制工具\n人声二:但愿吧\n［审讯结束］\n\n［以下是对克洛西耶供词的讨论］\n人声一:现在来看，不死族可以正常地使用仿制工具而不受伤害\n人声二:会不会是因为他们受了「不死诅咒」的原因呢\n人声一:有点道理……我这有个小机器，里面提取了不死之族的诅咒，或许可以把仿制材料放进去净化一下？\n\n【完】",
};
