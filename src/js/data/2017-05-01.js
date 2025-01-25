dataSetVersion = '2017-05-01' // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}

dataSet[dataSetVersion].options = [
  {
    name: 'Filter by Season',
    key: 'season',
    tooltip: 'Check this to restrict to seasons.',
    checked: true,
    sub: [{ name: 'Season 4', key: 's4' }],
  },
  {
    name: 'Season 4',
    key: 's4',
    tooltip: 'Only season 4',
  },
  {
    name: 'Remove Default Flags',
    key: 'default',
    tooltip: 'Check this to remove all default flags.',
  },
]

dataSet[dataSetVersion].characterData = [
  {
    name: 'Testlandia',
    img: 'testlandia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Frisbeeteria',
    img: 'frisbeeteria',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Reploid Productions',
    img: 'reploid_productions',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'NERVUN',
    img: 'nervun',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Sedgistan',
    img: 'sedgistan',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Archregimancy',
    img: 'the_archregimancy',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Ko-oren',
    img: 'ko-oren',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Shizensky',
    img: 'shizensky',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Euroslavia',
    img: 'euroslavia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Paffnia',
    img: 'paffnia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Goobergunchia',
    img: 'goobergunchia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Ballotonia',
    img: 'ballotonia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sanctaria',
    img: 'sanctaria',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kylarnatia',
    img: 'kylarnatia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Katganistan',
    img: 'katganistan',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'SalusaSecondus',
    img: 'salusasecondus',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Knootoss',
    img: 'knootoss',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Jakker',
    img: 'jakker',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'NewTexas',
    img: 'newtexas',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Blaatschapen',
    img: 'the_blaatschapen',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Zwangzug',
    img: 'zwangzug',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Woonsocket',
    img: 'woonsocket',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Mallorea and Riva',
    img: 'mallorea_and_riva',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Mousebumples',
    img: 'mousebumples',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Grays Harbor',
    img: 'grays_harbor',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Transnapastain',
    img: 'transnapastain',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Crazy girl',
    img: 'crazy_girl',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Lamoni',
    img: 'lamoni',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Luna Amore',
    img: 'luna_amore',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Riemstagrad',
    img: 'riemstagrad',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Automagfreek',
    img: 'automagfreek',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Omigodtheykilledkenny',
    img: 'omigodtheykilledkenny',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Stoklomolvi',
    img: 'stoklomolvi',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Allanea',
    img: 'allanea',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Rhein States',
    img: 'the_rhein_states',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Macabees',
    img: 'the_macabees',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Aleisyr',
    img: 'aleisyr',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ardchoille',
    img: 'ardchoille',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Bears Armed',
    img: 'bears_armed',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Eluvatar',
    img: 'eluvatar',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Charlotte Ryberg',
    img: 'charlotte_ryberg',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Independent Planets',
    img: 'independent_planets',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Todd McCloud',
    img: 'todd_mccloud',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Klaus Devestatorie',
    img: 'klaus_devestatorie',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Mikeswill',
    img: 'mikeswill',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kindjal',
    img: 'kindjal',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Grendels',
    img: 'the_grendels',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Pogaria',
    img: 'pogaria',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kyrusia',
    img: 'kyrusia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Goodnamesarerare',
    img: 'goodnamesarerare',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'PurDunamis',
    img: 'purdunamis',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ratateague',
    img: 'ratateague',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'DarthStassen',
    img: 'darthstassen',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Auralia',
    img: 'auralia',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Great Nepal',
    img: 'great_nepal',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Glen-Rhodes',
    img: 'glenrhodes',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Christian Democrats',
    img: 'christian_democrats',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Avaerilon',
    img: 'avaerilon',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Gigaverse',
    img: 'gigaverse',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kelssek',
    img: 'kelssek',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Chedonia',
    img: 'chedonia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Tzo',
    img: 'tzo',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kandarin',
    img: 'kandarin',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Sasten',
    img: 'sasten',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Valinon',
    img: 'valinon',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Menta Lee-IL',
    img: 'menta_leeil',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Whereisthatistan',
    img: 'whereisthatistan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Daedra1a',
    img: 'daedra1a',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Borkistan',
    img: 'borkistan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Yaorozu',
    img: 'yaorozu',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Escalan Corps-Star Island',
    img: 'escalan_corpsstar_island',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kundu',
    img: 'kundu',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Complete Bastards',
    img: 'complete_bastards',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Tzuland',
    img: 'tzuland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Cromulent Peoples',
    img: 'cromulent_peoples',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Look at me',
    img: 'look_at_me',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Smiley Bob',
    img: 'smiley_bob',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'YoriZ',
    img: 'yoriz',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Particle',
    img: 'particle',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Meropis',
    img: 'meropis',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Old Tyrannia',
    img: 'old_tyrannia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Aenglaland',
    img: 'aenglaland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Giovenith',
    img: 'giovenith',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ransium',
    img: 'ransium',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Farnhamia',
    img: 'farnhamia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Saugeen',
    img: 'saugeen',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Seven by Nine',
    img: 'seven_by_nine',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Stovilium',
    img: 'stovilium',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Dutchyland',
    img: 'dutchyland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Zurkerx',
    img: 'zurkerx',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Pax Aurea',
    img: 'pax_aurea',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Earth Federation',
    img: 'earth_federation',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Uniserve',
    img: 'uniserve',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Markreich',
    img: 'markreich',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Undivulged Principles',
    img: 'undivulged_principles',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Bhang Bhang Duc',
    img: 'bhang_bhang_duc',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Disco Empire',
    img: 'disco_empire',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'G C Bakura',
    img: 'g_c_bakura',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Lakanaba',
    img: 'lakanaba',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ferrianona',
    img: 'ferrianona',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ral Ixshida',
    img: 'ral_ixshida',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Aurora Islands',
    img: 'aurora_islands',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Tim-Opolis',
    img: 'tim-opolis',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Despoticania',
    img: 'despoticania',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Belarum',
    img: 'belarum',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Little Flowers',
    img: 'little_flowers',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'GeodesicDragon',
    img: 'geodesicdragon',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Neutraligon',
    img: 'neutraligon',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Starblaydia',
    img: 'starblaydia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Cavallino33',
    img: 'cavallino33',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Elejamie',
    img: 'elejamie',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Southland',
    img: 'southland',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sierra Lyricalia',
    img: 'sierra_lyricalia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Corsaria',
    img: 'corsaria',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Xoriet',
    img: 'xoriet',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'G-Tech Corporation',
    img: 'g-tech_corporation',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Wilkshire',
    img: 'wilkshire',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Edgemaster',
    img: 'edgemaster',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Artoonia',
    img: 'artoonia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sunset',
    img: 'sunset',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Koda-Land',
    img: 'kodaland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Qvait',
    img: 'qvait',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Bananaistan',
    img: 'bananaistan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Blogotopia',
    img: 'blogotopia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Soops',
    img: 'soops',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Sionis Prioratus',
    img: 'sionis_prioratus',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Los Santos',
    img: 'los_santos',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Rubyna',
    img: 'rubyna',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Topid',
    img: 'topid',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Bothia',
    img: 'bothia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kalessin',
    img: 'kalessin',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Naughty Slave Girls',
    img: 'naughty_slave_girls',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'McMasterdonia',
    img: 'mcmasterdonia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Almonaster Nuevo',
    img: 'almonaster_nuevo',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Good Order',
    img: 'new_good_order',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Valkalan',
    img: 'valkalan',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Aston',
    img: 'aston',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Drasnia',
    img: 'drasnia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Separatist Peoples',
    img: 'separatist_peoples',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Esternial',
    img: 'esternial',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Teaberry',
    img: 'teaberry',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'The Centauri',
    img: 'the_centauri',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Alice Gardens',
    img: 'alice_gardens',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Wopruthien',
    img: 'wopruthien',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sciongrad',
    img: 'sciongrad',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Duxburian Union',
    img: 'duxburian_union',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Cogitation',
    img: 'cogitation',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'HeyZay',
    img: 'heyzay',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Bruce',
    img: 'the_bruce',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Tremalkier',
    img: 'tremalkier',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Lancaster of Wessex',
    img: 'lancaster_of_wessex',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Salaxalans',
    img: 'the_salaxalans',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Eta Carinae',
    img: 'eta_carinae',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'New Owningland',
    img: 'new_owningland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'A mean old man',
    img: 'a_mean_old_man',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Treznor',
    img: 'treznor',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Uelvan',
    img: 'uelvan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Saltanyas',
    img: 'saltanyas',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Former English Colony',
    img: 'former_english_colony',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Audioslavia',
    img: 'audioslavia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Pope Hope',
    img: 'pope_hope',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Mindalia',
    img: 'mindalia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Trixmonia',
    img: 'trixmonia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Bears Armed Mission',
    img: 'bears_armed_mission',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Northern Borland',
    img: 'northern_borland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kiasu-ism',
    img: 'kiasu-ism',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Talisman',
    img: 'the_talisman',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Davidianian',
    img: 'davidianian',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Trotterdam',
    img: 'trotterdam',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Techno',
    img: 'techno',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'East Borland',
    img: 'east_borland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Safj',
    img: 'safj',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Midlands',
    img: 'midlands',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Ziedrich',
    img: 'new_ziedrich',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Santheres',
    img: 'santheres',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Nation of Quebec',
    img: 'nation_of_quebec',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Koffee',
    img: 'koffee',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'ABU AMMAR',
    img: 'abu_ammar',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Muspellheim',
    img: 'muspellheim',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Hesperonis',
    img: 'hesperonis',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Anaxphonia',
    img: 'anaxphonia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'North East Somerset',
    img: 'north_east_somerset',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: '9003',
    img: '9003',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Paradise',
    img: 'paradise',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Myrth',
    img: 'myrth',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Arkayn Stretenby',
    img: 'arkayn_stretenby',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'CR Oscilloscopes',
    img: 'cr_oscilloscopes',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Wulfhelm',
    img: 'wulfhelm',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Psypheria',
    img: 'psypheria',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'A baddon',
    img: 'a_baddon',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'ColdHeartedBastards',
    img: 'coldheartedbastards',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Pythagosaurus',
    img: 'pythagosaurus',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Iron League',
    img: 'the_iron_league',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Unibotian WA Mission',
    img: 'unibotian_wa_mission',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Krioval',
    img: 'krioval',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kaigi',
    img: 'kaigi',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Macisikan',
    img: 'macisikan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Attempted Socialism',
    img: 'attempted_socialism',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sentient Peoples',
    img: 'sentient_peoples',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Tenkistan',
    img: 'tenkistan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Free Socialism',
    img: 'free_socialism',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Stalker',
    img: 'the_stalker',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Otaku Stratus',
    img: 'otaku_stratus',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Szczuropolis',
    img: 'szczuropolis',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Tierra del Queso',
    img: 'tierra_del_queso',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Sinistress',
    img: 'the_sinistress',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'S_diego',
    img: 's_diego',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Mograpelandia',
    img: 'mograpelandia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Cashdeer',
    img: 'cashdeer',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Wentland',
    img: 'wentland',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Draconis Nightcrawlis',
    img: 'draconis_nightcrawlis',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Bright Angel',
    img: 'bright_angel',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'San Jose',
    img: 'san_jose',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Godular',
    img: 'godular',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Theorin',
    img: 'theorin',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Eaischpnaeieacgkque Bhcieaghpodsttditf',
    img: 'eaischpnaeieacgkque_bhcieaghpodsttditf',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Geidi Centauri Prime',
    img: 'geidi_centauri_prime',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The New California Republic',
    img: 'the_new_california_republic',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kractero',
    img: 'kractero',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Abacathea',
    img: 'abacathea',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Benedicion',
    img: 'benedicion',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Zulanka',
    img: 'zulanka',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Carrasastova',
    img: 'carrasastova',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Mindless contempt',
    img: 'mindless_contempt',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Ramaeus',
    img: 'ramaeus',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The-CID',
    img: 'the-cid',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Tyronian Socialist State',
    img: 'tyronian_socialist_state',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Grim Reaper',
    img: 'the_grim_reaper',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Electrum',
    img: 'electrum',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Gruenberg',
    img: 'gruenberg',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Quintessence of Dust',
    img: 'quintessence_of_dust',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'A Slanted Black Stripe',
    img: 'a_slanted_black_stripe',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Caelapes',
    img: 'caelapes',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Tsunamy',
    img: 'tsunamy',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Verdant Haven',
    img: 'verdant_haven',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Australian rePublic',
    img: 'australian_republic',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Treadwellia',
    img: 'treadwellia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Nuremgard',
    img: 'nuremgard',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Czechostan',
    img: 'czechostan',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Zamri1138',
    img: 'zamri1138',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kaboomlandia',
    img: 'kaboomlandia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Baggieland',
    img: 'baggieland',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kyldellian Halon',
    img: 'kyldellian_halon',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Merconitonitopia',
    img: 'merconitonitopia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Imperium Anglorum',
    img: 'imperium_anglorum',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Drawkland',
    img: 'drawkland',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Dark System',
    img: 'the_dark_system',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Valrknut',
    img: 'valrknut',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Foucaults garden',
    img: 'foucaults_garden',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Golgothastan',
    img: 'golgothastan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Corfad',
    img: 'corfad',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Alistia',
    img: 'alistia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Laudesia',
    img: 'laudesia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'VIPERMARTIAN',
    img: 'vipermartian',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Desperaux',
    img: 'desperaux',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Free Joy State',
    img: 'the_free_joy_state',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Wrapper',
    img: 'wrapper',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'ErVaReAn rEpUbLiC',
    img: 'ervarean_republic',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Annihilators of Chan Island',
    img: 'annihilators_of_chan_island',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Vando0sa',
    img: 'vando0sa',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Imperium Collectives',
    img: 'the_imperium_collectives',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Northern Socialist States',
    img: 'northern_socialist_states',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Teutionia',
    img: 'teutionia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Sacara',
    img: 'sacara',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Lislandia',
    img: 'lislandia',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Kingdom of Space',
    img: 'kingdom_of_space',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Nova Hollandia',
    img: 'nova_hollandia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Montagna',
    img: 'montagna',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Racoda',
    img: 'racoda',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Vancouvia',
    img: 'vancouvia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Territorio di Nessuno',
    img: 'territorio_di_nessuno',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'New Chilokver',
    img: 'new_chilokver',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The IGER Civilization',
    img: 'the_iger_civilization',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Outer Sparta',
    img: 'outer_sparta',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Rouge Christmas State',
    img: 'the_rouge_christmas_state',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Wallenburg',
    img: 'wallenburg',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Gnejs',
    img: 'gnejs',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Lakemba',
    img: 'new_lakemba',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Singapore no2',
    img: 'singapore_no2',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Caracasus',
    img: 'caracasus',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Sinclarian Provinces',
    img: 'the_sinclarian_provinces',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'USS Monitor',
    img: 'uss_monitor',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Frieden-und Freudenland',
    img: 'friedenund_freudenland',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Infinitta',
    img: 'infinitta',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Felpolandia',
    img: 'felpolandia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Pencil Sharpeners 2',
    img: 'pencil_sharpeners_2',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Candlewhisper Archive',
    img: 'candlewhisper_archive',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Creeperopolis',
    img: 'creeperopolis',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Pallaith',
    img: 'pallaith',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Notyoutopia',
    img: 'notyoutopia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Solborg',
    img: 'solborg',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Milostein',
    img: 'milostein',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Valentine Z',
    img: 'valentine_z',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Le Libertia',
    img: 'le_libertia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Chan Island',
    img: 'chan_island',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Galway-Dublin',
    img: 'galway-dublin',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Jutsa',
    img: 'jutsa',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Queen Yuno',
    img: 'queen_yuno',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Sunto',
    img: 'sunto',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Choistan',
    img: 'choistan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'The Atlae Isles',
    img: 'the_atlae_isles',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'SherpDaWerp',
    img: 'sherpdawerp',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Yodle',
    img: 'yodle',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Herya',
    img: 'herya',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Chingis',
    img: 'chingis',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Roavin',
    img: 'roavin',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kaschovia',
    img: 'kaschovia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Land Without Shrimp',
    img: 'land_without_shrimp',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Aguaria Major',
    img: 'aguaria_major',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Merni',
    img: 'merni',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Grene Knyght',
    img: 'the_grene_knyght',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Holy Principality of Saint Mark',
    img: 'the_holy_principality_of_saint_mark',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Daarwyrth',
    img: 'daarwyrth',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Raghallaigh',
    img: 'raghallaigh',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Marsupial Illuminati',
    img: 'the_marsupial_illuminati',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Atsvea',
    img: 'atsvea',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Helaw',
    img: 'helaw',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Holy Oranz',
    img: 'holy_oranz',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Noahs Second Country',
    img: 'noahs_second_country',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'ATLANTIARIV',
    img: 'atlantiariv',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Shwe Tu Colony',
    img: 'shwe_tu_colony',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Tinhampton',
    img: 'tinhampton',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Greater Eireann',
    img: 'greater_eireann',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Xagill',
    img: 'xagill',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Siwale',
    img: 'siwale',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Koem Kab',
    img: 'koem_kab',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Jar Wattinree',
    img: 'jar_wattinree',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Lord Dominator',
    img: 'lord_dominator',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Fauxia',
    img: 'fauxia',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'New Visayan Islands',
    img: 'new_visayan_islands',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Quebecshire',
    img: 'quebecshire',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Greater Cesnica',
    img: 'greater_cesnica',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Candensia',
    img: 'candensia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Kwaj',
    img: 'kwaj',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Heavens Reach',
    img: 'heavens_reach',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Yahlia',
    img: 'yahlia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Honeydewistania',
    img: 'honeydewistania',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Genbu Kaiden',
    img: 'genbu_kaiden',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'His Excellency',
    img: 'his_excellency',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Omnistria',
    img: 'omnistria',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Aerilia',
    img: 'aerilia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Turbeaux',
    img: 'turbeaux',
    opts: {
      default: true,
      season: ['s4'],
    },
  },
  {
    name: 'Canyamel',
    img: 'canyamel',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Kuriko',
    img: 'kuriko',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Erynia and Draconia',
    img: 'erynia_and_draconia',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Comrade Occitania',
    img: 'comrade_occitania',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Altmer Dominion',
    img: 'altmer_dominion',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Haku',
    img: 'haku',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Terrabod',
    img: 'terrabod',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Concrete Slab',
    img: 'concrete_slab',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Shibutani',
    img: 'shibutani',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Seanat',
    img: 'seanat',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Unshleepd',
    img: 'unshleepd',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Krusavich',
    img: 'krusavich',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Jehenna',
    img: 'jehenna',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Ethnon',
    img: 'ethnon',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Typica',
    img: 'typica',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Makasta',
    img: 'new_makasta',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Eraver',
    img: 'eraver',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Morover',
    img: 'morover',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Hulldom',
    img: 'hulldom',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Walfo',
    img: 'walfo',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'United Calanworie',
    img: 'united_calanworie',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Refuge Isle',
    img: 'refuge_isle',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Maowi',
    img: 'maowi',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Andusre',
    img: 'andusre',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Barfleur',
    img: 'barfleur',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Sylh Alanor',
    img: 'sylh_alanor',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Simone Republic',
    img: 'simone_republic',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Dabarastan',
    img: 'dabarastan',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'Jim the Baptist',
    img: 'jim_the_baptist',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Giovanniland',
    img: 'giovanniland',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Varanius',
    img: 'varanius',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New England INC',
    img: 'new_england_inc',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Ostrovskiy',
    img: 'ostrovskiy',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Westinor',
    img: 'westinor',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Picairn',
    img: 'picairn',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Ankhalic Vaspriot',
    img: 'the_ankhalic_vaspriot',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Mishian Legion',
    img: 'mishian_legion',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Minskiev',
    img: 'minskiev',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Socialist Platypus',
    img: 'socialist_platypus',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Kowloon Bay',
    img: 'new_kowloon_bay',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Pineappleistania',
    img: 'pineappleistania',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Barlyy',
    img: 'barlyy',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Bankowiata',
    img: 'bankowiata',
    opts: {
      default: false,
      season: [],
    },
  },
  {
    name: 'PhilTech',
    img: 'philtech',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'New Anarchisticstan',
    img: 'new_anarchisticstan',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Osheiga',
    img: 'osheiga',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Umbratellus',
    img: 'umbratellus',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Millenhaal',
    img: 'millenhaal',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Improper Classifications',
    img: 'improper_classifications',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'West Barack and East Obama',
    img: 'west_barack_and_east_obama',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'The Ice States',
    img: 'the_ice_states',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Magecastle Embassy Building A5',
    img: 'magecastle_embassy_building_a5',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
  {
    name: 'Haymarket Riot',
    img: 'haymarket_riot',
    opts: {
      default: false,
      season: ['s4'],
    },
  },
]
