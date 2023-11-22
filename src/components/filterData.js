const filter = [
    'S65a Smiley',
    'S66a Smileys Violin',
    'S67a Smileys Death Horn',
    'PRO040 Teagan',
    'PRO041 Mario',
    'PRO042 Mr Red',
    'PRO043 Defender Bass',
    'PRO044 LVB Kit Green',
    'FC1 Membership Card',
    'FC2 Dorris',
    'FC3 George',
    'FC4 Dalilah',
    'FC5 Rose Petal',
    'FC6 Rosie',
    'FC7 Stickers',
    'FC8 Kris',
    'FC9 Frankie',
    'FC10 Sky',
    'FC11 Belle',
    'FC12 Jonny',
    'FC13 Rush',
    'FC14 Pin Badge',
    'FC15 Shine',
    'FC16 MC Bruv',
    'FC17 Arthur',
    'FC18 Markie',
    'FC19 Katie',
    'FC20 Guitar Picks',
    'FC21 Winston',
    'FC22 Drew',
    'FC23 Stanley',
    'FC24 Heather',
    'FC25 Drum Sticks',
    'FC26 Antonio',
    'FC27 Bo',
    'FC28 Courtney',
    'FC29 Silver Member',
    'FC30 Michelle',
    'FC31 Vimbo',
    'FC32 Valerie',
    'FC33 Alicia',
    'FC34 Kayleigh',
    'FC35 Super Poster',
    'FC36 Griff',
    'FC37 Matt',
    'FC38 Natalie',
    'FC39 Wez',
    'FC40 Angie',
    'FC41 Rozzer',
    'FC42 The Risers TShirt',
    'FC43 Tracy',
    'FC44 Ali',
    'FC45 Stewie',
    'FC46 Sasha',
    'FC47 Ian',
    'FC48 The Risers CD',
    'FC49 Jedd',
    'FC50 Elise',
    'FC51 Kinsey',
    'FC52 Nick',
    'FC53 Sweatbands',
    'FC54 Lolita',
    'FC55 Dave',
    'FC56 Nel G',
    'FC57 Gold Member',
    'FC58 Melissa',
    'FC59 Damien',
    'FC60 Faye',
    'FC61 Samantha',
    'FC62 Bobby Remedy',
    'FC63 The Risers Tickets',
    'FC64 Clive',
    'FC65 Jessie',
    'FC66 Grace',
    'FC67 Trudy',
    'FC68 Tony',
    'FC69 MC Vision',
    'FC70 Griff Demo',
    'FC71 Carlito',
    'FC72 Chaney',
    'FC73 Nina',
    'FC74 Sherri',
    'FC75 Kev',
    'FC76 Comic Draft 1',
    'FC77 Giuseppe',
    'FC78 Slippy',
    'FC79 Corey',
    'FC80 Keely',
    'FC81 RS Media Kit',
    'FC82 Stacy',
    'FC83 Nile',
    'FC84 Trenton Lundy',
    'FC85 Platinum Member',
    'FC86 Molly',
    'FC87 Bethany',
    'FC88 Harry',
    'FC89 Dean',
    'FC90 Amy',
    'FC91 The Risen CDs',
    'FC92 Neil',
    'FC93 Li',
    'FC94 Kitty',
    'FC95 Trisha',
    'FC96 MC Geezer',
    'FC97 Olivia',
    'FC98 World Tour Poster',
    'FC99 Kim',
    'FC100 Emma',
    'FC101 Raj',
    'FC102 Donna',
    'FC103 Star Child',
    'FC104 RS Caps',
    'FT1 United Kingdom',
    'FT2 Ireland',
    'FT3 Netherlands',
    'FT4 Belgium',
    'FT5 Germany',
    'FT6 Denmark',
    'FT7 Poland',
    'FT8 Czechia',
    'FT9 Finland',
    'FT10 Sweden',
    'FT11 Norway',
    'FT12 Iceland',
    'FT13 France',
    'FT14 Spain',
    'FT15 Portugal',
    'FT16 Italy',
    'FT17 Switzerland',
    'FT18 Luxembourg',
    'FT19 Austria',
    'FT20 Hungary',
    'FT21 Romania',
    'FT22 Ukraine',
    'FT23 Greece',
    'FT24 UAE',
    'FT25 South Africa',
    'FT26 Pakistan',
    'FT27 India',
    'FT28 Malaysia',
    'FT29 Thailand',
    'FT30 Taiwan',
    'FT31 Philippines',
    'FT32 Japan',
    'FT33 Hong Kong',
    'FT34 China',
    'FT35 Peace',
    'FT36 Singapore',
    'FT37 Australia',
    'FT38 New Zealand',
    'FT39 USA',
    'FT40 Canada',
    'FT41 Mexico',
    'FT42 Brazil',
    'FT43 Chile',
    'FT44 Argentina',
    'FT45 Venezuela',
    'FT46 Colombia',
    'FT47 Bolivia',
    'FT48 Paraguay',
    'FT49 Uruguay',
    'FT50 Peru',
    'FT51 Ecuador',
    'FT52 Costa Rica',
    'FTB1 Dougie',
    'FTB2 JoJo',
    'FTB3 Gizmo',
    'FTB4 Stephie',
    'FTB5 The Risers',
    'FTB6 The Risen',
    'FA1 Supportive Friend',
    'FA2 Casual Fan',
    'FA3 Super Fan',
    'FA4 Mega Fan',
    'RSTAR D1111',
    'RSTAR D1113',
    'RSTAR D1121',
    'RSTAR D1123',
    'RSTAR D1131',
    'RSTAR D1133',
    'RSTAR D1311',
    'RSTAR D1313',
    'RSTAR D1321',
    'RSTAR D1323',
    'RSTAR D1331',
    'RSTAR D1333',
    'RSTAR D2111',
    'RSTAR D2113',
    'RSTAR D2121',
    'RSTAR D2123',
    'RSTAR D2131',
    'RSTAR D2133',
    'RSTAR D2311',
    'RSTAR D2313',
    'RSTAR D2321',
    'RSTAR D2323',
    'RSTAR D2331',
    'RSTAR D2333',
    'RSTAR D3111',
    'RSTAR D3113',
    'RSTAR D3121',
    'RSTAR D3123',
    'RSTAR D3131',
    'RSTAR D3133',
    'RSTAR D3311',
    'RSTAR D3313',
    'RSTAR D3321',
    'RSTAR D3323',
    'RSTAR D3331',
    'RSTAR D3333',
    'RSTAR G1111',
    'RSTAR G1113',
    'RSTAR G1121',
    'RSTAR G1123',
    'RSTAR G1131',
    'RSTAR G1133',
    'RSTAR G1311',
    'RSTAR G1313',
    'RSTAR G1321',
    'RSTAR G1323',
    'RSTAR G1331',
    'RSTAR G1333',
    'RSTAR G2111',
    'RSTAR G2113',
    'RSTAR G2121',
    'RSTAR G2123',
    'RSTAR G2131',
    'RSTAR G2133',
    'RSTAR G2311',
    'RSTAR G2313',
    'RSTAR G2321',
    'RSTAR G2323',
    'RSTAR G2331',
    'RSTAR G2333',
    'RSTAR G3111',
    'RSTAR G3113',
    'RSTAR G3121',
    'RSTAR G3123',
    'RSTAR G3131',
    'RSTAR G3133',
    'RSTAR G3311',
    'RSTAR G3313',
    'RSTAR G3321',
    'RSTAR G3323',
    'RSTAR G3331',
    'RSTAR G3333',
    'RSTAR GP1111',
    'RSTAR GP1113',
    'RSTAR GP1121',
    'RSTAR GP1123',
    'RSTAR GP1131',
    'RSTAR GP1133',
    'RSTAR GP1311',
    'RSTAR GP1313',
    'RSTAR GP1321',
    'RSTAR GP1323',
    'RSTAR GP1331',
    'RSTAR GP1333',
    'RSTAR GP2111',
    'RSTAR GP2113',
    'RSTAR GP2121',
    'RSTAR GP2123',
    'RSTAR GP2131',
    'RSTAR GP2133',
    'RSTAR GP2311',
    'RSTAR GP2313',
    'RSTAR GP2321',
    'RSTAR GP2323',
    'RSTAR GP2331',
    'RSTAR GP2333',
    'RSTAR GP3111',
    'RSTAR GP3113',
    'RSTAR GP3121',
    'RSTAR GP3123',
    'RSTAR GP3131',
    'RSTAR GP3133',
    'RSTAR GP3311',
    'RSTAR GP3313',
    'RSTAR GP3321',
    'RSTAR GP3323',
    'RSTAR GP3331',
    'RSTAR GP3333',
    'RSTAR P1111',
    'RSTAR P1113',
    'RSTAR P1121',
    'RSTAR P1123',
    'RSTAR P1131',
    'RSTAR P1133',
    'RSTAR P1311',
    'RSTAR P1313',
    'RSTAR P1321',
    'RSTAR P1323',
    'RSTAR P1331',
    'RSTAR P1333',
    'RSTAR P2111',
    'RSTAR P2113',
    'RSTAR P2121',
    'RSTAR P2123',
    'RSTAR P2131',
    'RSTAR P2133',
    'RSTAR P2311',
    'RSTAR P2313',
    'RSTAR P2321',
    'RSTAR P2323',
    'RSTAR P2331',
    'RSTAR P2333',
    'RSTAR P3111',
    'RSTAR P3113',
    'RSTAR P3121',
    'RSTAR P3123',
    'RSTAR P3131',
    'RSTAR P3133',
    'RSTAR P3311',
    'RSTAR P3313',
    'RSTAR P3321',
    'RSTAR P3323',
    'RSTAR P3331',
    'RSTAR P3333',
]

export default filter
