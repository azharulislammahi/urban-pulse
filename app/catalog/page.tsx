'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

const C = {
  rust:   '#C4623A',
  cream:  '#FAFAF5',
  cream2: '#F5F0EA',
  beige:  '#EDE7DE',
  dark:   '#1C1C1A',
  mid:    '#3D3D3B',
  sub:    '#6B6460',
  muted:  '#9A9086',
  white:  '#ffffff',
  green:  '#3D7A4A',
}

const CAT_COLORS: Record<string, string> = {
  'FRAGRANCE':      '#7C3AED',
  'DOG':            '#C4623A',
  'CAT':            '#D97048',
  'BIRD':           '#2563EB',
  'REPTILE':        '#16A34A',
  'AQUATICS':       '#0891B2',
  'SMALL ANIMAL':   '#92400E',
  'PET SUPPLIES':   '#78350F',
  'HOME & KITCHEN': '#B45309',
  'HEALTH & WELLNESS': '#059669',
  'SPORTS & OUTDOORS': '#1D4ED8',
  'GROCERY':        '#D97706',
}

const CAT_BG: Record<string, string> = {
  'FRAGRANCE':      'rgba(124,58,237,0.1)',
  'DOG':            'rgba(196,98,58,0.1)',
  'CAT':            'rgba(217,112,72,0.1)',
  'BIRD':           'rgba(37,99,235,0.1)',
  'REPTILE':        'rgba(22,163,74,0.1)',
  'AQUATICS':       'rgba(8,145,178,0.1)',
  'SMALL ANIMAL':   'rgba(146,64,14,0.1)',
  'PET SUPPLIES':   'rgba(120,53,15,0.1)',
  'HOME & KITCHEN': 'rgba(180,83,9,0.1)',
  'HEALTH & WELLNESS': 'rgba(5,150,105,0.1)',
  'SPORTS & OUTDOORS': 'rgba(29,78,216,0.1)',
  'GROCERY':        'rgba(217,119,6,0.1)',
}

type Product = {
  rank: number; brand: string; name: string; category: string;
  sell: number; cost: number; profit: number; roi: number; map: boolean;
}

const PRODUCTS: Product[] = [
  {rank:1,brand:'Al Haramain',name:'AL HARAMAIN BLACK OUD EXTRAIT DE PARFUM SP MEN 3.3 OZ',category:'FRAGRANCE',sell:119.0,cost:34.0,profit:62.65,roi:184,map:true},
  {rank:2,brand:'Al Haramain',name:'AL HARAMAIN BON CHERIE UNISEX EXTRAIT DE PARFUM 3.4 OZ',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:3,brand:'Al Haramain',name:'AL HARAMAIN BON CHERIE VIOLETTE WOMEN EXTRAIT DE PARFUM 3.4 OZ',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:4,brand:'Al Haramain',name:'AL HARAMAIN ZAHARA AMBER DUBAI UNISEX  3.4 OZ EXTRAIT DE PERFUM',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:5,brand:'Al Haramain',name:'AL HARAMAIN ZAHARA OUDH DUBAI UNISEX 3.4 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:6,brand:'Al Haramain',name:'AL HARAMAIN ZAHARA SAGE DUBAI UNISEX  3.4 OZ EXTRAIT DE PERFUM',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:7,brand:'Armaf',name:'ARMAF CLUB DE NUIT BLING MEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:8,brand:'Armaf',name:'ARMAF CLUB DE NUIT INTENSE MEN 5.0 OZ PARFUM SP',category:'FRAGRANCE',sell:119.0,cost:34.0,profit:62.65,roi:184,map:true},
  {rank:9,brand:'Armaf',name:'ARMAF CLUB DE NUIT INTENSE MEN 6.7 OZ. EDP',category:'FRAGRANCE',sell:119.0,cost:34.0,profit:62.65,roi:184,map:true},
  {rank:10,brand:'Armaf',name:'ARMAF MOSAIC OPAL MALAKY MEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:11,brand:'Armaf',name:'ARMAF MOSAIC TOPAZ MEN  MALAKY 2.5 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:12,brand:'Armaf',name:'ARMAF ORCHESTRA LEGATO LUX MEN 2.7 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:13,brand:'Armaf',name:'ARMAF ORCHESTRA TEMPO TUNE MEN 3.0 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:14,brand:'Armaf',name:'ARMAF SAWDAA SEHR ALEUYUN MEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:15,brand:'Armaf',name:'ARMAF SEINE AMOUR BELVICO MEN  3.4 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:16,brand:'French',name:'FRENCH AVENUE VENENO SCARLET 100ML SPR EDP',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:17,brand:'Set',name:'SET ARMAF CLUB MILESTONE MEN 4 PC',category:'FRAGRANCE',sell:119.0,cost:34.0,profit:62.65,roi:184,map:true},
  {rank:18,brand:'Set',name:'SET ARMAF LUX ODYSSEY MANDARIN SKY LTD MEN ( 4 PC ) 3.4 OZ EDP/0.34 OZ TRAVEL /3',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:19,brand:'Abercrombie',name:'ABERCROMBIE FIERCE MEN 3.4 OZ EDC',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:20,brand:'Billie',name:'BILLIE EILISH WOMEN NO.2 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:21,brand:'Carolina Herrera',name:'CAROLINA HERRERA CH SPORT MEN 3.4 EDT',category:'FRAGRANCE',sell:115.5,cost:33.0,profit:60.68,roi:184,map:true},
  {rank:22,brand:'Dolce',name:'DOLCE & GABBANA DOLCE VIOLET WOMEN 2.5 OZ EDT SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:23,brand:'Givenchy',name:'GIVENCHY BLUE LABEL MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:24,brand:'Hugo Boss',name:'HUGO BOSS GREEN MEN 6.7 OZ. EDT SP',category:'FRAGRANCE',sell:119.0,cost:34.0,profit:62.65,roi:184,map:true},
  {rank:25,brand:'Lacoste',name:'LACOSTE BOOSTER MEN 4.2 OZ EDT SP (NEW UPC)',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:26,brand:'Lacoste',name:'LACOSTE L.12.12 EAU BLANC (WHITE) MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:27,brand:'Lacoste',name:'LACOSTE L.12.12 EAU DE BLANC MEN  3.4 OZ  EDP SP',category:'FRAGRANCE',sell:115.5,cost:33.0,profit:60.68,roi:184,map:true},
  {rank:28,brand:'Lacoste',name:'LACOSTE ORIGINAL WOMEN  3.4 OZ EDP SP',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:29,brand:'Moschino',name:'MOSCHINO TOY BOY MEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:30,brand:'Salvatore Ferragamo',name:'SALVATORE FERRAGAMO FERRAGAMO MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:31,brand:'Salvatore Ferragamo',name:'SALVATORE FERRAGAMO SIGNORINA WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:117.25,cost:33.5,profit:61.66,roi:184,map:true},
  {rank:32,brand:'Set',name:'SET ARIANA  GRANDE MOON LIGHT ( 3 PC )3.4 OZ SG / 3.4 OZ BODY SOUFLE / 3.4 OZ ED',category:'FRAGRANCE',sell:113.75,cost:32.5,profit:59.69,roi:184,map:true},
  {rank:33,brand:'Al Haramain',name:'AL HARAMAIN AMBER OUD AQUA DUBAI UNISEX  2.5 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:34,brand:'Al Haramain',name:'AL HARAMAIN AMBER OUD BLACK EDITION UNISEX 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:35,brand:'Al Haramain',name:'AL HARAMAIN FLORAL FAIR WOMEN EXTRAIT DE PARFUM 3.4 OZ',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:36,brand:'Al Haramain',name:'AL HARAMAIN GREEN DUBAI UNISEX 3.4 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:37,brand:'Al Haramain',name:'AL HARAMAIN MIRACLE DUBAI WOMEN 3.4 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:38,brand:'Al Haramain',name:'AL HARAMAIN PALM DUBAI UNISEX3.4 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:39,brand:'Dumont',name:'DUMONT NITRO RED INTENSELY MEN  3.4 OZ EDP SP',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:40,brand:'French',name:'FRENCH AVENUE VENENO BIANCO UNISEX 3.3 OZ EDP SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:41,brand:'Lattafa',name:'LATTAFA ANGHAM SECOND SONG WOMEN EDP SP 100ML',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:42,brand:'Lattafa',name:'LATTAFA KHAMRAH WAHA  UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:43,brand:'Le',name:'LE CHAMEAU  CASABELLA MOONLIGHT WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:44,brand:'Rasasi',name:'RASASI JUNOON VELVET WOMEN 1.7 OZ EDP SP',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:45,brand:'Set',name:'SET AFNAN 9 PM REBEL UNISEX ( 3 PC ) 3.4 OZ EDP SP / 5.0 OZ SG / 5.0 OZ  DEO',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:46,brand:'Set',name:'SET AFNAN SUPREMACY NOT ONLY INTENSE UNISEX (3 PC) 3.4 OZ EDP SP / 2.5 DEO / 3.4',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:47,brand:'Set',name:'SET ARMAF CLUB DE NUIT INTENSE MEN ( 4 PC SET ) 3.6 OZ. / 3.4 OZ S.GEL / 8.4 SHA',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:48,brand:'Set',name:'SET ARMAF CLUB DE NUIT URBAN MAN ELIXIR ( 4 PC )3.4 OZ  EDP SP /0.34 OZ  TRAVEL ',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:49,brand:'Ariana',name:'ARIANA GRANDE GOD IS A WOMAN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:50,brand:'Calvin Klein',name:'CALVIN KLEIN ETERNITY MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:51,brand:'French',name:'FRENCH AVENUE GRECIA WHITE UNISEX 3.4 EDP SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:52,brand:'Givenchy',name:'GIVENCHY PI MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:53,brand:'Givenchy',name:'GIVENCHY POUR HOMME  3.4 OZ EDT SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:54,brand:'Givenchy',name:'GIVENCHY POUR HOMME MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:55,brand:'Hugo Boss',name:'HUGO BOSS UNLIMITED MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:56,brand:'Issey Miyake',name:'ISSEY MIYAKE WOMEN 3.3 OZ. EDT SP',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:57,brand:'Jimmy Choo',name:'JIMMY CHOO L\'EAU WOMEN 3.0 OZ EDT SP',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:58,brand:'Jimmy Choo',name:'JIMMY CHOO URBAN HERO GOLD EDITON MEN 3.4 OZ. EDP',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:59,brand:'Lacoste',name:'LACOSTE L.12.12 ROSE SPARKLING WOMEN  3.0 OZ  EDT SP',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:60,brand:'Lacoste',name:'LACOSTE ORIGINAL MEN 3.3 OZ EAU DE PARFUM',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:61,brand:'Mont Blanc',name:'MONT BLANC LEGEND SPIRIT MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:62,brand:'Narciso',name:'NARCISO RODRIGUEZ ALL OF ME WOMEN 3.0 OZ EDP SP',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:63,brand:'Paco Rabanne',name:'PACO RABANNE ULTRAVIOLET WOMEN 2.7 OZ. EDP SP',category:'FRAGRANCE',sell:110.25,cost:31.5,profit:57.71,roi:183,map:true},
  {rank:64,brand:'Set',name:'SET ARIANA GRANDE - ARI WOMEN ( 3 PC )3.4 OZ SG /3.4 OZ BODY SOUFFLE /3.4 OZ EDP',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:65,brand:'Set',name:'SET CACHAREL ANAIS ANAIS L ORIGINAL WOMEN ( 3 PC )3.4 OZ EDT SP / 2 X1.7 OZ BODY',category:'FRAGRANCE',sell:112.0,cost:32.0,profit:58.7,roi:183,map:true},
  {rank:66,brand:'Set',name:'SET CALVIN KLEIN EUPHORIA MEN (3 PC) 3.3 OZ EDT SP / 3.3 OZ AFTER SHAVE BALM / 0',category:'FRAGRANCE',sell:106.75,cost:30.5,profit:55.74,roi:183,map:true},
  {rank:67,brand:'Set',name:'SET HUGO BOSS # 6 MEN ( 2 PC ) 3.4 EDT / 2.5 DEO STICK',category:'FRAGRANCE',sell:120.0,cost:34.5,profit:63.0,roi:183,map:true},
  {rank:68,brand:'Set',name:'SET MONTBLANC LEGEND RED MEN ( 3 PC )3.4 EDP SP /  3.4 OZ SG / 0.25 OZ EDP SP',category:'FRAGRANCE',sell:108.5,cost:31.0,profit:56.72,roi:183,map:true},
  {rank:69,brand:'Al Haramain',name:'AL HARAMAIN AMBER OUD WHITE UNISEX  2.0 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:70,brand:'Al Haramain',name:'AL HARAMAIN ROYAL MUSK UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:71,brand:'Armaf',name:'ARMAF CLUB DE NUIT WOMEN 6.8 OZ. EDP SP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:72,brand:'Armaf',name:'ARMAF CLUB NUIT ICONIC MEN 3.6 OZ. EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:73,brand:'Armaf',name:'ARMAF ODYSSEY MANDARIN MEN 6.7 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:74,brand:'French',name:'FRENCH AVENUE CHAOS EXTRAIT UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:75,brand:'Lattafa',name:'LATTAFA GIVE ME GOURMAND  CHOCO OVERDOSE UNISEX 2.5 OZ  EDP SP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:76,brand:'Lattafa',name:'LATTAFA PRIDE LA COLLECTION D\'ANTIQUITIES (WATCH) UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:77,brand:'Rasasi',name:'RASASI HAWAS DIVA WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:78,brand:'Rasasi',name:'RASASI HAWAS ICE MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:79,brand:'Rasasi',name:'RASASI HAWAS LONDON MEN  3.4 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:80,brand:'Rasasi',name:'RASASI HAWAS MALIBU MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:81,brand:'Set',name:'SET AFNAN TURATHI MEN ( 3 PC )3.0 OZ EDP SP / 3.4 OZ SG /3.4 OZ ASB',category:'FRAGRANCE',sell:105.0,cost:30.0,profit:54.75,roi:182,map:true},
  {rank:82,brand:'Set',name:'SET ARMAF CLUB DE NUIT WOMEN (4 PC )3.4 OZ EDP SPR / 0.34 OZ TRAVEL  / 3.4 OZ BL',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:83,brand:'Set',name:'SET ARMAF ODYSSEY AQUA MEN( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ SG / 8.4 OZ SHAMPOO / ',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:84,brand:'Set',name:'SET ARMAF ODYSSEY DUBAI CHOCOLATE GOURMAND MEN ( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ G',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:85,brand:'Set',name:'SET ARMAF ODYSSEY LIMONI UNISEX ( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ GEL / 1.7 OZ BL ',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:86,brand:'Set',name:'SET ARMAF ODYSSEY MEGA MEN 3.4 OZ( 4PC )',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:87,brand:'Set',name:'SET ARMAF ODYSSEY SPECTRA MEN( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ SG / 8.4 OZ SHAMPOO',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:88,brand:'Set',name:'SET ARMAF ODYSSEY TIRANT MEN( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ SG / 8.4 OZ SHAMPOO ',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:89,brand:'Set',name:'SET LATTAFA  ETERNAL OUD UNISEX ( 3 PC ) 3.4 EDP / 0.68 EDP / PERFUMED SPRAY 6.7',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:90,brand:'Set',name:'SET LATTAFA PISA MEN ( 3 PC ) 3.4 EDP / 0.68 EDP / PERFUMED SPRAY 6.7 OZ',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:91,brand:'Set',name:'SET LATTAFA PRIDE KING OF ARABIA MEN (3 PC) 3.4 OZ EDP SP / 0.68 OZ  EDP / 6.8 O',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:92,brand:'Set',name:'SET LATTAFA PRIDE QUEEN OF ARABIA WOMEN ( 3 PC )3.4 OZ EDP SP \\ 0.68 OZ EDP \\ 6.',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:93,brand:'Azzaro',name:'AZZARO CHORME MEN 3.4 OZ. EDT SP (NEW UPC)',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:94,brand:'Carolina Herrera',name:'CAROLINA HERRERA PASION WOMEN 3.4 EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:95,brand:'Dkny',name:'DKNY BE EXTRA DELICIOUS WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:96,brand:'Hugo Boss',name:'HUGO BOSS SUPERMAN  X HUGO MEN  4.2 OZ EDP SP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:97,brand:'Issey Miyake',name:'ISSEY MIYAKE LEAU DISSEY POUR HOMME VETIVER 3.4 OZ  EDT SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:98,brand:'Jimmy Choo',name:'JIMMY CHOO ICE MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:99,brand:'Jimmy Choo',name:'JIMMY CHOO URBAN HERO MEN 3.4 OZ. EDP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:100,brand:'Lacoste',name:'LACOSTE POUR FEMME 3.0 OZ EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:101,brand:'Mercedes',name:'MERCEDES BENZ CLASSIC WOMEN 3.0 OZ EDP SP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:102,brand:'Mont Blanc',name:'MONT BLANC LEGEND NIGHT MEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:103,brand:'Perry',name:'PERRY ELLIS 360 RED MEN 6.8 OZ. EDT SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:104,brand:'Ralph Lauren',name:'RALPH LAUREN SAFARI MEN 4.2 EDT SP',category:'FRAGRANCE',sell:103.25,cost:29.5,profit:53.76,roi:182,map:true},
  {rank:105,brand:'Set',name:'SET ELIZABETH TAYLOR WHITE DIAMOND WOMEN (4 PC ) 3.4 OZ EDT SP /3.4 POZ BL / 3.4',category:'FRAGRANCE',sell:101.5,cost:29.0,profit:52.77,roi:182,map:true},
  {rank:106,brand:'Set',name:'SET PARIS HILTON  HEIRESS WOMEN ( 3 PC )3.4 OZ EDP SP / 3.0 OZ BL / 3.0 OZ SG',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:107,brand:'Tommy Hilfiger',name:'TOMMY HILFIGER WOMEN 6.8 OZ EDT SP',category:'FRAGRANCE',sell:99.75,cost:28.5,profit:51.79,roi:182,map:true},
  {rank:108,brand:'Afnan',name:'AFNAN 9PM MEN 5.0 OZ. EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:109,brand:'Al Haramain',name:'AL HARAMAIN AMBER MUSK UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:110,brand:'Al Haramain',name:'AL HARAMAIN AMBER OUD GOLD UNISEX 2.0 OZ EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:111,brand:'Al Haramain',name:'AL HARAMAIN ROUGE FRENCH COLLECTION MEN  3.4 OZ EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:112,brand:'Fragrance',name:'FRAGRANCE WORLD AZZURE AOUD MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:113,brand:'Fragrance',name:'FRAGRANCE WORLD LIQUID BRUN AVENUE FOR MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:114,brand:'French',name:'FRENCH AVENUE COCONUT LECHE WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:115,brand:'French',name:'FRENCH AVENUE VULCAN BAIE UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:116,brand:'French',name:'FRENCH AVENUE VULCAN FEU UNISEX 3.4 OZ EXTRAIT DE PARFUM',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:117,brand:'French',name:'FRENCH AVENUE VULCAN SABLE 3.4 OZ EDP SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:118,brand:'Lattafa',name:'LATTAFA NEBRAS ELIXIR UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:119,brand:'Lattafa',name:'LATTAFA PRIDE ART OF NATURE I UNISEX  3.4 EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:120,brand:'Lattafa',name:'LATTAFA PRIDE KING OF ARABIA MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:121,brand:'Set',name:'SET AFNAN 9AM FEMME (4 PC)3.4 OZ EDP SP /3.4 OZ S.GEL / 3.4 OZ BL / 5.0 BODY MIS',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:122,brand:'Set',name:'SET AFNAN 9PM FEMME  ( 4 PC ) 3.4 OZ EDP SP / 3.4 OZ SG / 3.4 OZ BL / 5.0 OZ BOD',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:123,brand:'Set',name:'SET ARMAF ODYSSEY WHITE MEN (4 PC ) 3.4 OZ EDP / 0.34 OZ TRAVEL / 3.4 OZ SG / 6.',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:124,brand:'Set',name:'SET LATTAFA  AFFECTION UNISEX ( 3 PC ) 3.4 EDP / 0.68 EDP / PERFUMED SPRAY 6.7 O',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:125,brand:'Set',name:'SET LATTAFA  ASAD 5TH ANNIVERSARY ( 2 PC ) ASAD 3.4 OZ EDP SP / ASAD ZANZIBAR 3.',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:126,brand:'Animale',name:'ANIMALE WOMEN 6.8 OZ. EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:127,brand:'Ariana',name:'ARIANA GRANDE ARI WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:128,brand:'Ariana',name:'ARIANA GRANDE MOONLIGHT WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:129,brand:'Azzaro',name:'AZZARO CHROME AZURE MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:130,brand:'Burberry',name:'BURBERRY TOUCH WOMEN 3.3 EDP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:131,brand:'Calvin Klein',name:'CALVIN KLEIN ETERNITY WOMEN 3.4 EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:132,brand:'Clinique',name:'CLINIQUE HAPPY WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:133,brand:'Dolce',name:'DOLCE & GABBANA L\'IMPERATRICE WOMEN 3.3 OZ EDT SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:134,brand:'French',name:'FRENCH AVENUE NECTARE EXTRADOSE UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:135,brand:'Halloween',name:'HALLOWEEN X MEN 4.2 OZ. EDT SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:136,brand:'Issey Miyake',name:'ISSEY MIYAKE FUSION D\'ISSEY 3.4 OZ. EDT',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:137,brand:'Issey Miyake',name:'ISSEY MIYAKE LEAU DISSEY PIVOINE WOMEN  3.4 OZ  EDT SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:138,brand:'Juicy',name:'JUICY VIVA LA JUICY ROSE WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:139,brand:'Lacoste',name:'LACOSTE L.12.12 BLANC EAU INTENSE MEN  3.4 OZ EDT SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:140,brand:'Lacoste',name:'LACOSTE L.12.12 ROSE WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:141,brand:'Lacoste',name:'LACOSTE TOUCH OF PINK WOMEN 3.0 OZ. EDT SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:142,brand:'Lolita',name:'LOLITA LEMPIKA WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:143,brand:'Mercedes',name:'MERCEDES BENZ ROSE WOMEN 3.0 OZ. EDT SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:144,brand:'Messi',name:'MESSI MEN 3.38 OZ EDP SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:145,brand:'Mont Blanc',name:'MONT BLANC EMBLEM MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:146,brand:'Mont Blanc',name:'MONT BLANC LEGEND RED MEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:147,brand:'Paco Rabanne',name:'PACO RABANNE POUR HOMME MEN 3.4 OZ. EDT',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:148,brand:'Perry',name:'PERRY ELLIS 360 WOMEN 6.8 OZ. EDT SP',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:149,brand:'Salvatore Ferragamo',name:'SALVATORE FERRAGAMO FORESTE DI SETA UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:150,brand:'Salvatore Ferragamo',name:'SALVATORE FERRAGAMO SIGNORINA IN FIORE WOMEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:151,brand:'Set',name:'SET CALVIN KLEIN OBSESION WOMEN (3 PC ) 3.4 OZ  EDP SP / 3.4  OZ BL / 0.50 OZ ED',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:152,brand:'Set',name:'SET CALVIN KLEIN OBSESSION WOMEN (4 PC )3.4 OZ EDP / 6.7 OZ BL / 3.4 OZ SG / 0.5',category:'FRAGRANCE',sell:94.5,cost:27.0,profit:48.83,roi:181,map:true},
  {rank:153,brand:'Set',name:'SET GUESS BELLA VITA  WOMEN ( 4 PC ) 3.4 OZ EDP SP / 0.50 OZ TRAVEL /3.4 OZ BL /',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:154,brand:'Set',name:'SET PARIS HILTON CAN CAN WOMEN ( 4 PC ) 3.4 EDP SP/0.34 OZ EDP SP / 3.0 OZ BL / ',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:155,brand:'Set',name:'SET PARIS HILTON MEN ( 4PC SET )',category:'FRAGRANCE',sell:98.0,cost:28.0,profit:50.8,roi:181,map:true},
  {rank:156,brand:'Set',name:'SET SALVATORE FERRAGAMO-F-BLACK MEN( 3PC ) 3.4 OZ EDT SP / 2.5 OZ SG / 2.5 OZ A/',category:'FRAGRANCE',sell:92.75,cost:26.5,profit:47.84,roi:181,map:true},
  {rank:157,brand:'Tommy Hilfiger',name:'TOMMY HILFIGER IMPACT TOGETHER MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:96.25,cost:27.5,profit:49.81,roi:181,map:true},
  {rank:158,brand:'Afnan',name:'AFNAN 9PM ELIXIR UNISEX 3.4 OZ PARFUM INTENSE',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:159,brand:'Afnan',name:'AFNAN TURATHI ELECTRIC MEN 3.0 OZ EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:160,brand:'Al Haramain',name:'AL HARAMAIN LA LUNE WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:161,brand:'Al Haramain',name:'AL HARAMAIN OPULENT SAPPHIRE 3.4 OZ EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:162,brand:'Arabiyat',name:'ARABIYAT PRESTIGE BAHIYA RUBY WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:163,brand:'Armaf',name:'ARMAF CLUB DE NUIT URBAN ELIXIR MEN 3.6 OZ EDP SP ( NEW UPC )',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:164,brand:'Armaf',name:'ARMAF MANDARIN SKY VINTAGE EDITION MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:165,brand:'Armaf',name:'ARMAF ODYSSEY MANDARIN IN SKY ELIXIR EDITION LIMITED MEN 3.3 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:166,brand:'French',name:'FRENCH AVENUE LUSCIOUS WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:167,brand:'French',name:'FRENCH AVENUE SH MALLOW FLUFF UNISEX  3.4 OZ EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:168,brand:'Lattafa',name:'LATTAFA GIVE ME GOURMAND COOKIE CRAVE UNISEX 2.5 OZ EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:169,brand:'Lattafa',name:'LATTAFA GIVE ME GOURMAND WALLOM  MADNESS UNISEX 2.5 OZ  EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:170,brand:'Lattafa',name:'LATTAFA GIVE ME GOURMAND WHIPPED PLEASURE WOMEN  2.5 OZ EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:171,brand:'Lattafa',name:'LATTAFA SEHR UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:172,brand:'Paris',name:'PARIS CORNER MARSHMALLOW BLUSH WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:173,brand:'Rasasi',name:'RASASI HAWAS BLACK MEN  3.4 OZ EDP  SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:174,brand:'Set',name:'SET AFNAN 9AM DIVE MEN ( 3PC ) 3.4 OZ EDP SP / 5.0 OZ SHOWER GEL / 5.0 OZ DEO',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:175,brand:'Abercombie',name:'ABERCOMBIE & FITCH AWAY MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:176,brand:'Abercrombie',name:'ABERCROMBIE 100% PASSION MEN 3.4  OZ EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:177,brand:'Abercrombie',name:'ABERCROMBIE AUTHENTIC NIGHT MEN 3.4 OZ  EDT SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:178,brand:'Burberry',name:'BURBERRY LONDON FABRIC MEN 3.4 OZ EDT. SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:179,brand:'Burberry',name:'BURBERRY LONDON FABRIC WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:180,brand:'Burberry',name:'BURBERRY TOUCH MEN 3.3 EDT SP (NEW PRESENTATION)',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:181,brand:'Cacharel',name:'CACHAREL AMOR AMOR WOMAN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:182,brand:'Calvin Klein',name:'CALVIN KLEIN ETERNITY AQUA MEN 6.7 OZ. EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:183,brand:'Calvin Klein',name:'CALVIN KLEIN ETERNITY MEN 3.4 EDT SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:184,brand:'Ferragamo',name:'FERRAGAMO SIGNORINA WOMEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:185,brand:'Halloween',name:'HALLOWEEN BLUE DROP WOMEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:186,brand:'Halloween',name:'HALLOWEEN MAN HERO 4.2 OZ. EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:187,brand:'Halloween',name:'HALLOWEEN MEN 4.2 OZ. EDT SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:188,brand:'Halloween',name:'HALLOWEEN MY WISH WOMEN 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:189,brand:'Hugo Boss',name:'HUGO BOSS BOTTLED #6 NIGHT MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:190,brand:'Hugo Boss',name:'HUGO BOSS GREEN MEN 4.2 OZ. EDT SP (NEW UPC)',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:191,brand:'Hugo Boss',name:'HUGO BOSS MA VIE WOMEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:192,brand:'Juicy',name:'JUICY COUTURE VIVA LA FLEUR WOMAN 5.0 EDT SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:193,brand:'Lacoste',name:'LACOSTE ESSENTIAL MEN 4.2 OZ EDT SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:194,brand:'Lacoste',name:'LACOSTE L.12.12 NOIR MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:195,brand:'Lacoste',name:'LACOSTE RED MEN 4.2 OZ EDT SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:196,brand:'Lolilta',name:'LOLILTA LEMPICKA MEN 3.4 OZ. EDT NEW UPC',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:197,brand:'Lolita Lempicka',name:'LOLITA LEMPICKA MON PREMIER WOMEN 1.7 OZ  EDP SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:198,brand:'Perry',name:'PERRY ELLIS 360 MEN 6.7 OZ. EDT SP',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:199,brand:'Perry',name:'PERRY ELLIS CORAL WOMEN 6.8 OZ. EDP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:200,brand:'Sabrina',name:'SABRINA CARPENTER SWEET TOOTH CARAMEL DREAM WOMEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:201,brand:'Sabrina',name:'SABRINA CARPENTER SWEET TOOTH CHERRY BABY WOMEN 2.5 OZ  EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:202,brand:'Sabrina',name:'SABRINA CARPENTER SWEET TOOTH ME ESPRESSO WOMEN 2.5 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:203,brand:'Salvatore Ferragamo',name:'SALVATORE FERRAGAMO-F-BLACK MEN 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:204,brand:'Set',name:'SET CALVIN KLEIN OBSESSION MEN (3 PC )4.2 OZ EDT / 3.4 OZ AS/ 2.5 OZ DEO',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:205,brand:'Set',name:'SET LIZ CLAIBORNE CURVE MEN ( 4PC) 4.2 OZ EDC SP / 3.4 OZ AFTER SHAVE BALM /3.4 ',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:206,brand:'Set',name:'SET PARIS HILTON WOMEN (4 PC )3.4 OZ EDP SP',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:207,brand:'Set',name:'SET PERRY ELLIS 18 MEN ( 4PC SET )NEW UPC',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:208,brand:'Set',name:'SET PERRY ELLIS 18 WOMEN ( 4 PC ) 3.4 OZ EDP SP / 4.0 OZ BODY MIST/ 3.0 OZ SG  /',category:'FRAGRANCE',sell:89.25,cost:25.5,profit:45.86,roi:180,map:true},
  {rank:209,brand:'Set',name:'SET PERRY ELLIS 360 BLACK MEN ( 4 PC ) 3.4 OZ EDT / 3.0 OZ SG /3.0 OZ A/SH BALM ',category:'FRAGRANCE',sell:87.5,cost:25.0,profit:44.88,roi:180,map:true},
  {rank:210,brand:'Set',name:'SET SALVATORE FERRAGAMO-F MEN ( 3PC )3.4 OZ EDT SP /2.5 OZ SG / 2.5 OZ A/S BALM',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:211,brand:'Set',name:'SET TOMMY HILFIGER IMPACT MEN 2 PC 3.4 OZ. EDT / 4 ML',category:'FRAGRANCE',sell:91.0,cost:26.0,profit:46.85,roi:180,map:true},
  {rank:212,brand:'Al Haramain',name:'AL HARAMAIN L\'AVENTURE CIEL WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:213,brand:'Armaf',name:'ARMAF CLUB DE NUIT MILESTONE MEN 3.6 OZ. EDP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:214,brand:'Armaf',name:'ARMAF ISLAND BLISS DELIGHTS MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:215,brand:'Armaf',name:'ARMAF YUM YUM WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:216,brand:'French',name:'FRENCH AVENUE CHOCOLA ADDICT 100ML SPR EDP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:217,brand:'French',name:'FRENCH AVENUE ROYAL BLEND BOURBON UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:218,brand:'Lattafa',name:'LATTAFA  UNISEX PRIDE AJWAD UNISEX 3.0 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:219,brand:'Lattafa',name:'LATTAFA MUSAMAM WHITE INTENSE UNISEX 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:220,brand:'Lattafa',name:'LATTAFA NICHE EMARATI AL DANA UNISEX  3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:221,brand:'Lattafa',name:'LATTAFA NICHE EMARATI CLASSIC STONE 3.4 EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:222,brand:'Lattafa',name:'LATTAFA NICHE EMARATI GHINWA UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:223,brand:'Lattafa',name:'LATTAFA NICHE EMARATI HAYAAM UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:224,brand:'Lattafa',name:'LATTAFA NICHE EMARATI KHALID UNISEX  2.7 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:225,brand:'Lattafa',name:'LATTAFA NICHE EMARATI TOLEEN UNISEX 2.7 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:226,brand:'Lattafa',name:'LATTAFA NICHE EMARATI VINTAGE CASTLE MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:227,brand:'Lattafa',name:'LATTAFA NICHE EMARATI ZIKRA UNISEX 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:228,brand:'Le',name:'LE CHAMEAU CASABELLA AL HUB WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:229,brand:'Le',name:'LE CHAMEAU CASABELLA TWILIGHT WOMEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:230,brand:'Orientica',name:'ORIENTICA XO XCLUSIF OUD CLASSIC UNISEX EXTRAIT DE PARFUM 2.0 OZ',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:231,brand:'Rasasi',name:'RASASI HAWAS MEN 3.4 OZ EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:232,brand:'Rasasi',name:'RASASI LUBAN ABSOLUTE UNISEX 6.76 OZ EDP SP',category:'FRAGRANCE',sell:120.0,cost:35.0,profit:62.5,roi:179,map:true},
  {rank:233,brand:'Set',name:'SET ARMAF ODYSSEY ARTISTO MEN (4 PC )3.4 OZ EDP SP \\ 3.4 OZ BL\\1.7 OZ BS\\ SHAMPO',category:'FRAGRANCE',sell:120.0,cost:35.0,profit:62.5,roi:179,map:true},
  {rank:234,brand:'Set',name:'SET LATTAFA PRIDE X0.67 OZ ( 5 PC )NEBRAS /ART OF WOOD / ART OF UNIVERSE /ANSAAM',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:235,brand:'Abercrombie',name:'ABERCROMBIE & FITCH AUTHENTIC SELF WOMEN 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:236,brand:'Abercrombie',name:'ABERCROMBIE & FITCH FIRST INSTINCT MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:237,brand:'Abercrombie',name:'ABERCROMBIE AUTHENTIC NIGHT WOMEN 3.4 OZ  EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:238,brand:'Animale',name:'ANIMALE MEN 6.8 OZ. EDT SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:239,brand:'Burberry',name:'BURBERRY BRIT MEN 3.4 OZ EDT SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:240,brand:'Burberry',name:'BURBERRY CLASSIC MEN 3.4 OZ. EDT SP (NEW PRESENTATION)',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:241,brand:'Cacharel',name:'CACHAREL ANAIS ANAIS WOMAN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:242,brand:'Calvin Klein',name:'CALVIN KLEIN EUPHORIA MEN 3.4 EDT SP - NEW UPC',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:243,brand:'Clinique',name:'CLINIQUE HAPPY HEART WOMEN 3.4 OZ. EDP SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:244,brand:'Clinique',name:'CLINIQUE HAPPY MEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:245,brand:'Davidoff',name:'DAVIDOFF COOL WATER MEN 6.8 OZ. EDT SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:246,brand:'Davidoff',name:'DAVIDOFF COOL WATER WOMEN 6.7 OZ. EDT SP',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:247,brand:'Dkny',name:'DKNY GOLDEN DELICIOUS WOMEN 3.4 OZ  EDP SP ( NEW UPC )',category:'FRAGRANCE',sell:84.0,cost:24.0,profit:42.9,roi:179,map:true},
  {rank:248,brand:'Halloween',name:'HALLOWEEN WOMEN 3.4 OZ. EDT SP',category:'FRAGRANCE',sell:85.75,cost:24.5,profit:43.89,roi:179,map:true},
  {rank:249,brand:'Hugo Boss',name:'HUGO BOSS THE SCENT MEN 3.4 OZ EDT SP REFILLABLE',category:'FRAGRANCE',sell:120.0,cost:35.0,profit:62.5,roi:179,map:true},
  {rank:250,brand:'J.J. FUDS',name:'J.J. FUDS NO BULL DISPLAY',category:'DOG',sell:157.87,cost:60.0,profit:70.69,roi:118,map:false},
  {rank:251,brand:'TROPICLEAN',name:'TROPICLEAN CHEW STOP BEHAVIOR AID DOG & HOME SPRAY',category:'DOG',sell:18.99,cost:5.86,profit:6.78,roi:116,map:true},
  {rank:252,brand:'TROPICLEAN',name:'TROPICLEAN CHEW STOP BEHAVIOR AID HOME SPRAY',category:'DOG',sell:18.99,cost:5.86,profit:6.78,roi:116,map:true},
  {rank:253,brand:'TROPICLEAN',name:'TROPICLEAN CHEW STOP BEHAVIOR AID PUPPY SPRAY',category:'DOG',sell:18.99,cost:5.86,profit:6.78,roi:116,map:true},
  {rank:254,brand:'KONG',name:'KONG OLD GLORY GOODIE RIBBON',category:'DOG',sell:17.59,cost:5.4,profit:6.05,roi:112,map:false},
  {rank:255,brand:'PETLOCK ULTRA',name:'PETLOCK ULTRA DOG FLOOR STAND DISPLAY',category:'DOG',sell:459.2,cost:192.06,profit:194.76,roi:101,map:false},
  {rank:256,brand:'NATURE\'S MIRACLE',name:'NATURE\'S MIRACLE SKUNK ODOR REMOVER RTU',category:'DOG',sell:21.82,cost:7.6,profit:7.45,roi:98,map:false},
  {rank:257,brand:'TROPICLEAN',name:'FRESH BREATH DROPS SMALL COUNTER DISPLAY',category:'DOG',sell:84.43,cost:35.64,profit:32.63,roi:92,map:false},
  {rank:258,brand:'HALTI',name:'HALTI ANATOMY HARNESS',category:'DOG',sell:57.99,cost:25.03,profit:20.76,roi:83,map:true},
  {rank:259,brand:'HALTI',name:'HALTI ANATOMY HARNESS',category:'DOG',sell:53.99,cost:23.31,profit:19.08,roi:82,map:true},
  {rank:260,brand:'HALTI',name:'HALTI ANATOMY HARNESS',category:'DOG',sell:49.99,cost:21.58,profit:17.41,roi:81,map:true},
  {rank:261,brand:'HALTI',name:'HALTI ANATOMY HARNESS',category:'DOG',sell:45.99,cost:19.85,profit:15.74,roi:79,map:true},
  {rank:262,brand:'TROPICLEAN',name:'NATURAL FLEA & TICK LAUNDRY ADDITIVE',category:'DOG',sell:24.99,cost:9.97,profit:7.77,roi:78,map:true},
  {rank:263,brand:'HALTI',name:'HALTI ANATOMY MULTI LEAD',category:'DOG',sell:36.99,cost:15.97,profit:11.97,roi:75,map:true},
  {rank:264,brand:'HALTI',name:'HALTI ANATOMY MULTI LEAD',category:'DOG',sell:34.99,cost:15.11,profit:11.13,roi:74,map:true},
  {rank:265,brand:'CHUCKIT!',name:'CHUCKIT! ERRATIC BALL',category:'DOG',sell:17.59,cost:6.65,profit:4.8,roi:72,map:false},
  {rank:266,brand:'LILLY PET HAIR CLEAN-UP',name:'LILLY BRUSH PET HAIR CLEANUP FLOOR DISPLAY',category:'DOG',sell:604.75,cost:305.56,profit:204.98,roi:67,map:true},
  {rank:267,brand:'TROPICLEAN',name:'TROPICLEAN NATURAL FLEA AND TICK BUNDLE',category:'DOG',sell:288.47,cost:145.99,profit:95.71,roi:66,map:false},
  {rank:268,brand:'GOO-EEZ',name:'GOO-EEZ ECO-FRIENDLY POOP BAG COUNTER DISPLAY',category:'DOG',sell:359.64,cost:181.8,profit:120.39,roi:66,map:true},
  {rank:269,brand:'PETLOCK MAX',name:'PETLOCK ULTRA FLEA & TICK CONTROL FOR DOGS',category:'DOG',sell:24.99,cost:10.67,profit:7.07,roi:66,map:true},
  {rank:270,brand:'GOO-EEZ',name:'GOO-EEZ ECO-FRIENDLY POOP BAG COUNTER DISPLAY',category:'DOG',sell:293.58,cost:148.68,profit:97.36,roi:65,map:true},
  {rank:271,brand:'GOO-EEZ',name:'GOO-EEZ POOP BAG WINTER WONDERLAND COUNTER DISPLAY',category:'DOG',sell:293.58,cost:148.68,profit:97.36,roi:65,map:true},
  {rank:272,brand:'SPUNKY PUP',name:'SPUNKY PUP BARK BARS DISPLAY BOX PDQ',category:'DOG',sell:71.76,cost:35.04,profit:22.46,roi:64,map:true},
  {rank:273,brand:'PETLOCK',name:'PETLOCK PRO AND PETARMOR EXTEND COLLAR F&T DISPLAY',category:'DOG',sell:1180.26,cost:610.29,profit:389.43,roi:64,map:false},
  {rank:274,brand:'TROPICLEAN',name:'TROPICLEAN HOMEVET MEDICATED EAR DROPS',category:'DOG',sell:22.99,cost:9.93,profit:6.11,roi:62,map:true},
  {rank:275,brand:'PETLOCK',name:'PETLOCK PRO FLEA & TICK CONTROL FOR DOGS',category:'DOG',sell:24.99,cost:10.92,profit:6.82,roi:62,map:true},
  {rank:276,brand:'EQYSS',name:'EQYSS PREMIER COAT MOISTURIZER PET SPRAY',category:'DOG',sell:19.49,cost:8.07,profit:5.0,roi:62,map:true},
  {rank:277,brand:'TROPICLEAN',name:'OXYMED CHLORHEXIDINE WIPES',category:'DOG',sell:16.99,cost:6.8,profit:4.14,roi:61,map:true},
  {rank:278,brand:'TROPICLEAN',name:'TROPICLEAN GROOMING BUNDLE',category:'DOG',sell:290.2,cost:151.28,profit:91.89,roi:61,map:false},
  {rank:279,brand:'PET CORRECTOR',name:'PET CORRECTOR STOPS BARKING DISPLAY',category:'DOG',sell:203.88,cost:105.24,profit:64.56,roi:61,map:true},
  {rank:280,brand:'GOO-EEZ',name:'GOO-EEZ ROUND BRAIDED SUEDE PET BED',category:'DOG',sell:89.99,cost:45.45,profit:27.54,roi:61,map:true},
  {rank:281,brand:'GOO-EEZ',name:'GOO-EEZ 2 IN 1 BIKE BASKET & BACK-PACK CARRIER',category:'DOG',sell:79.99,cost:40.4,profit:24.09,roi:60,map:true},
  {rank:282,brand:'GOO-EEZ',name:'GOO-EEZ FOLDABLE CAR BOOSTER SEAT',category:'DOG',sell:79.99,cost:40.4,profit:24.09,roi:60,map:true},
  {rank:283,brand:'GOO-EEZ',name:'GOO-EEZ LUXURY SPA PET BED',category:'DOG',sell:79.99,cost:40.4,profit:24.09,roi:60,map:true},
  {rank:284,brand:'GOO-EEZ',name:'GOO-EEZ 3 IN 1 ADJUSTABLE MANGO WOOD DBL DINER',category:'DOG',sell:79.99,cost:40.4,profit:24.09,roi:60,map:true},
  {rank:285,brand:'GOO-EEZ',name:'GOO-EEZ FOLDABLE & PORTABLE PET POOL',category:'DOG',sell:99.0,cost:50.5,profit:30.15,roi:60,map:true},
  {rank:286,brand:'EQYSS',name:'EQYSS MEGA-TEK PET REBUILDER',category:'DOG',sell:26.99,cost:12.2,profit:7.24,roi:59,map:true},
  {rank:287,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:64.99,cost:32.83,profit:18.91,roi:58,map:true},
  {rank:288,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:69.99,cost:35.35,profit:20.64,roi:58,map:true},
  {rank:289,brand:'ICELANDIC+',name:'ICELANDIC+ LONG COD SKIN STRIPS',category:'DOG',sell:119.8,cost:62.19,profit:36.14,roi:58,map:true},
  {rank:290,brand:'KONG',name:'KONG DONUT',category:'DOG',sell:24.96,cost:11.2,profit:6.52,roi:58,map:true},
  {rank:291,brand:'CALM PAWS',name:'CALM PAWS RECOVERY BOOT',category:'DOG',sell:20.99,cost:9.12,profit:5.22,roi:57,map:true},
  {rank:292,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:59.99,cost:30.3,profit:17.19,roi:57,map:true},
  {rank:293,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:59.99,cost:30.3,profit:17.19,roi:57,map:true},
  {rank:294,brand:'GOO-EEZ',name:'GOO-EEZ LUXURY SPA PET BED',category:'DOG',sell:59.99,cost:30.3,profit:17.19,roi:57,map:true},
  {rank:295,brand:'ASPEN PET',name:'ASPEN PET ROUND ANIMAL PRINT BED',category:'DOG',sell:32.99,cost:15.64,profit:8.9,roi:57,map:false},
  {rank:296,brand:'CALM PAWS',name:'CALM PAWS RECOVERY BOOT',category:'DOG',sell:19.99,cost:8.67,profit:4.82,roi:56,map:true},
  {rank:297,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:54.99,cost:27.78,profit:15.46,roi:56,map:true},
  {rank:298,brand:'GOO-EEZ',name:'GOO-EEZ KANGAROO FLEECE HOODIE',category:'DOG',sell:54.99,cost:27.78,profit:15.46,roi:56,map:true},
  {rank:299,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:54.99,cost:27.78,profit:15.46,roi:56,map:true},
  {rank:300,brand:'PETLOCK',name:'PETLOCK ULTRA/DUO AND PETARMOR EXTEND F&T DISPLAY',category:'DOG',sell:874.13,cost:474.75,profit:264.76,roi:56,map:false},
  {rank:301,brand:'TROPICLEAN',name:'FRESH BREATH CLEAN TEETH ORAL CARE GEL',category:'DOG',sell:19.99,cost:8.68,profit:4.81,roi:55,map:true},
  {rank:302,brand:'COMPANY OF ANIMALS',name:'COACHI TUGGI ELASTIC SPIDER SUPER TOUGH TUG TOY',category:'DOG',sell:24.99,cost:11.45,profit:6.29,roi:55,map:true},
  {rank:303,brand:'COMPANY OF ANIMALS',name:'COACHI TUGGI ELASTIC HELIX SUPER TOUGH TUG TOY',category:'DOG',sell:24.99,cost:11.46,profit:6.28,roi:55,map:true},
  {rank:304,brand:'CAPSHIELD MAXX',name:'CAPSHIELD MAXX DOG MONTHLY FLEA SUPPLEMNT CHEWABLE',category:'DOG',sell:27.07,cost:12.6,profit:6.91,roi:55,map:true},
  {rank:305,brand:'KONG',name:'KONG EXTREME DONUT',category:'DOG',sell:25.96,cost:11.99,profit:6.58,roi:55,map:true},
  {rank:306,brand:'PET AG',name:'PETLAC PUPPY MILK REPLACEMENT LIQUID',category:'DOG',sell:22.02,cost:9.83,profit:5.39,roi:55,map:true},
  {rank:307,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:308,brand:'GOO-EEZ',name:'GOO-EEZ LUXURY SPA PET BED',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:309,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:310,brand:'GOO-EEZ',name:'GOO-EEZ COOLING DOUBLE WALL METAL BOWL',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:311,brand:'GOO-EEZ',name:'GOO-EEZ INCLINED MANGO WOOD DOUBLE FEEDER',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:312,brand:'GOO-EEZ',name:'GOO-EEZ HOODED PLUSH PET BED',category:'DOG',sell:49.99,cost:25.25,profit:13.74,roi:54,map:true},
  {rank:313,brand:'PET AG',name:'GOAT\'S MILK ESBILAC POWDER',category:'DOG',sell:22.94,cost:10.36,profit:5.64,roi:54,map:true},
  {rank:314,brand:'TROPICLEAN',name:'OXYMED ANTI-ITCH MEDICATED PET SHAMPOO',category:'DOG',sell:17.99,cost:7.7,profit:4.09,roi:53,map:true},
  {rank:315,brand:'TROPICLEAN',name:'OXYMED MEDICATED ULTRA SOOTHING TREATMENT',category:'DOG',sell:17.99,cost:7.7,profit:4.09,roi:53,map:true},
  {rank:316,brand:'CALM PAWS',name:'CALM PAWS RECOVERY BOOT',category:'DOG',sell:17.99,cost:7.73,profit:4.06,roi:53,map:true},
  {rank:317,brand:'CALM PAWS',name:'CALM PAWS RECOVERY BOOT',category:'DOG',sell:18.99,cost:8.24,profit:4.4,roi:53,map:true},
  {rank:318,brand:'TROPICLEAN',name:'OXYMED HYPOALLERGENIC GENTLE CLEANSING PET SHAMPOO',category:'DOG',sell:17.99,cost:7.7,profit:4.09,roi:53,map:true},
  {rank:319,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:44.99,cost:22.73,profit:12.01,roi:53,map:true},
  {rank:320,brand:'GOO-EEZ',name:'GOO-EEZ KANGAROO FLEECE HOODIE',category:'DOG',sell:44.99,cost:22.73,profit:12.01,roi:53,map:true},
  {rank:321,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:44.99,cost:22.73,profit:12.01,roi:53,map:true},
  {rank:322,brand:'GOO-EEZ',name:'GOO-EEZ SPLASH & SPRAY POOL FOR PETS',category:'DOG',sell:49.99,cost:25.49,profit:13.5,roi:53,map:true},
  {rank:323,brand:'ZIPPYPAWS',name:'ZIPPYPAWS ADVENTURE LIFE JACKET',category:'DOG',sell:48.99,cost:24.99,profit:13.15,roi:53,map:true},
  {rank:324,brand:'BASKERVILLE',name:'BASKERVILLE INVISA TRANSPARENT PADDED MUZZLE',category:'DOG',sell:45.99,cost:23.46,profit:12.13,roi:52,map:true},
  {rank:325,brand:'LILLY PET HAIR CLEAN-UP',name:'LILLY BRUSH PET HAIR CLEAN-UP MIGHTY BLADE',category:'DOG',sell:42.99,cost:21.72,profit:11.32,roi:52,map:true},
  {rank:326,brand:'TROPICLEAN',name:'FRESH BREATH ORAL CARE WATER ADDITIVE FOR DOGS',category:'DOG',sell:23.99,cost:11.2,profit:5.69,roi:51,map:true},
  {rank:327,brand:'COMPANY OF ANIMALS',name:'COACHI TRAIN & TREAT BAG WITH DRAW STRING CLOSURE',category:'DOG',sell:21.99,cost:10.09,profit:5.1,roi:51,map:true},
  {rank:328,brand:'GOO-EEZ',name:'GOO-EEZ REFLECTIVE HOODED RAINCOAT',category:'DOG',sell:39.99,cost:20.2,profit:10.29,roi:51,map:true},
  {rank:329,brand:'GOO-EEZ',name:'GOO-EEZ MOCK NECK SIGNATURE DOG JACKET',category:'DOG',sell:39.99,cost:20.2,profit:10.29,roi:51,map:true},
  {rank:330,brand:'ETTA SAYS',name:'ETTA SAYS PREMIUM CRUNCHY DOG CHEW DISPLAY',category:'DOG',sell:388.31,cost:216.0,profit:110.56,roi:51,map:true},
  {rank:331,brand:'ZIPPYPAWS',name:'ZIPPYPAWS ADVENTURE LIFE JACKET',category:'DOG',sell:44.99,cost:22.95,profit:11.79,roi:51,map:true},
  {rank:332,brand:'BASKERVILLE',name:'BASKERVILLE INVISA TRANSPARENT PADDED MUZZLE',category:'DOG',sell:41.99,cost:21.41,profit:10.78,roi:50,map:true},
  {rank:333,brand:'KONG',name:'KONG CLASSIC',category:'DOG',sell:25.96,cost:12.41,profit:6.16,roi:50,map:true},
  {rank:334,brand:'PETKORE',name:'PETKORE FLOTEK TUG',category:'DOG',sell:24.99,cost:11.81,profit:5.93,roi:50,map:true},
  {rank:335,brand:'TROPICLEAN',name:'TROPICLEAN FRESH BREATH BUNDLE',category:'DOG',sell:262.05,cost:146.86,profit:72.38,roi:49,map:false},
  {rank:336,brand:'BASKERVILLE',name:'BASKERVILLE INVISA TRANSPARENT PADDED MUZZLE',category:'DOG',sell:37.99,cost:19.37,profit:9.42,roi:49,map:true},
  {rank:337,brand:'LILLY PET HAIR CLEAN-UP',name:'LILLY BRUSH PET HAIR CLEAN-UP BLADE KIT',category:'DOG',sell:35.99,cost:18.18,profit:8.91,roi:49,map:true},
  {rank:338,brand:'ALCOTT',name:'ALCOTT ROPE NORWEGIAN HARNESS',category:'DOG',sell:28.99,cost:14.23,profit:6.91,roi:49,map:true},
  {rank:339,brand:'EQYSS',name:'EQYSS MICRO-TEK PET SHAMPOO',category:'DOG',sell:20.99,cost:9.61,profit:4.73,roi:49,map:true},
  {rank:340,brand:'PETKORE',name:'PETKORE FLEX BALL & TAIL',category:'DOG',sell:23.99,cost:11.32,profit:5.57,roi:49,map:true},
  {rank:341,brand:'DIGGERS',name:'DIGGERS FLYING GRUNT PIG KIT 3T DISPLAY',category:'DOG',sell:442.99,cost:252.6,profit:120.44,roi:48,map:false},
  {rank:342,brand:'CHOMPER',name:'CHOMPER TWISTERZ BALLISTIC BRAIDED DOG TOY DISPLAY',category:'DOG',sell:523.56,cost:298.08,profit:143.45,roi:48,map:false},
  {rank:343,brand:'CALM PAWS',name:'CALM PAWS E-COLLAR',category:'DOG',sell:18.99,cost:8.53,profit:4.11,roi:48,map:true},
  {rank:344,brand:'COMPANY OF ANIMALS',name:'COACHI TUGGI ELASTIC HIDE SUPER TOUGH TUG TOY',category:'DOG',sell:20.49,cost:9.4,profit:4.52,roi:48,map:true},
  {rank:345,brand:'GOO-EEZ',name:'GOO-EEZ CLEANSING WIPES ASSORTED COUNTER DISPLAY',category:'CAT',sell:385.59,cost:195.01,profit:129.24,roi:66,map:true},
  {rank:346,brand:'PETLOCK II',name:'PETLOCK DUO FLEA & TICK CONTROL FOR CATS',category:'CAT',sell:24.99,cost:10.67,profit:7.07,roi:66,map:true},
  {rank:347,brand:'PETLOCK',name:'PETLOCK PRO FLEA & TICK CONTROL FOR CATS',category:'CAT',sell:24.99,cost:10.92,profit:6.82,roi:62,map:true},
  {rank:348,brand:'TROPICLEAN',name:'NATURAL FLEA & TICK GENTLE SHAMPOO FOR CATS',category:'CAT',sell:17.99,cost:7.47,profit:4.32,roi:58,map:true},
  {rank:349,brand:'MIDWEST HOMES',name:'FELINE NUVO LILY',category:'CAT',sell:153.9,cost:87.47,profit:39.84,roi:46,map:false},
  {rank:350,brand:'MIDWEST HOMES',name:'FELINE NUVO ALDEN CAT FURNITURE',category:'CAT',sell:198.87,cost:113.01,profit:52.53,roi:46,map:false},
  {rank:351,brand:'LITTER GENIE',name:'LITTER GENIE STAINLESS STEEL LITTER BOX',category:'CAT',sell:64.99,cost:35.74,profit:16.0,roi:45,map:true},
  {rank:352,brand:'PET AG',name:'PETLAC KITTEN MILK REPLACEMENT LIQUID',category:'CAT',sell:22.02,cost:10.66,profit:4.56,roi:43,map:true},
  {rank:353,brand:'MIDWEST HOMES',name:'FELINE NUVO FORTE SCRATCHING POST- BRIO',category:'CAT',sell:81.13,cost:46.12,profit:19.34,roi:42,map:false},
  {rank:354,brand:'TROPICLEAN',name:'NATURAL FLEA & TICK HOME & CAT SPRAY',category:'CAT',sell:24.99,cost:12.55,profit:5.19,roi:41,map:true},
  {rank:355,brand:'CALM PAWS',name:'CALM PAWS RECOVERY VEST FOR CATS',category:'CAT',sell:41.99,cost:23.32,profit:8.87,roi:38,map:true},
  {rank:356,brand:'TURBO',name:'TURBO TRUCK CAT SCRATCHER',category:'CAT',sell:39.49,cost:21.74,profit:8.33,roi:38,map:true},
  {rank:357,brand:'PET AG',name:'KMR MILK REPLACER POWDER FOR KITTENS',category:'CAT',sell:32.29,cost:17.59,profit:6.36,roi:36,map:true},
  {rank:358,brand:'SENTRY',name:'SENTRY 30 DAY CALMING COLLAR FOR CATS',category:'CAT',sell:44.99,cost:25.6,profit:9.14,roi:36,map:true},
  {rank:359,brand:'ALZOO',name:'ALZOO PLANT-BASED CALMING DIFFUSER KIT CAT',category:'CAT',sell:22.99,cost:11.99,profit:4.05,roi:34,map:true},
  {rank:360,brand:'TURBO',name:'TURBO INFINITY CAT SCRATCHER',category:'CAT',sell:30.49,cost:16.76,profit:5.66,roi:34,map:true},
  {rank:361,brand:'TREATIBLES',name:'TREATIBLES EXTRA STRENGTH CAT SOFT CHEWS',category:'CAT',sell:34.2,cost:19.19,profit:6.38,roi:33,map:true},
  {rank:362,brand:'TURBO',name:'TURBO RAINBOW STACK CAT SCRATCHER',category:'CAT',sell:30.49,cost:16.85,profit:5.57,roi:33,map:true},
  {rank:363,brand:'CALM PAWS',name:'CALM PAWS RECOVERY VEST FOR CATS',category:'CAT',sell:44.99,cost:26.23,profit:8.51,roi:32,map:true},
  {rank:364,brand:'DR. DANIELS',name:'DR. DANIELS SUMMIT BRAND LOOSE CATNIP',category:'CAT',sell:30.79,cost:17.11,profit:5.56,roi:32,map:false},
  {rank:365,brand:'TURBO',name:'TURBO MILK CARTON CAT SCRATCHER',category:'CAT',sell:29.99,cost:16.66,profit:5.33,roi:32,map:true},
  {rank:366,brand:'TREATIBLES',name:'TREATIBLES HEMP SOFT CHEWABLES FOR CATS',category:'CAT',sell:28.8,cost:16.16,profit:4.82,roi:30,map:true},
  {rank:367,brand:'SUZIE\'S CBD TREATS',name:'SUZIE\'S CBD GOODBYE UTI DROPS FOR CATS',category:'CAT',sell:28.12,cost:16.16,profit:4.24,roi:26,map:false},
  {rank:368,brand:'SKOUTS HONOR',name:'SKOUTS HONOR URINE & ODOR DESTROYER FOR CATS',category:'CAT',sell:34.99,cost:21.21,profit:5.03,roi:24,map:true},
  {rank:369,brand:'EVERSPRING',name:'PAWZEE DELUXE PLASTIC PET PLACE MAT FLOOR DS',category:'CAT',sell:279.52,cost:191.04,profit:43.05,roi:23,map:false},
  {rank:370,brand:'WARE',name:'KITTY CONDO 3 STORY',category:'CAT',sell:252.02,cost:171.85,profit:38.87,roi:23,map:false},
  {rank:371,brand:'WARE',name:'CAT TREE',category:'CAT',sell:248.42,cost:169.39,profit:38.27,roi:23,map:false},
  {rank:372,brand:'K&H',name:'CREATIVE SOLUTIONS KITTY BARN HEATED',category:'CAT',sell:164.2,cost:111.93,profit:24.14,roi:22,map:false},
  {rank:373,brand:'WARE',name:'KITTY CAVE & CRADLE',category:'CAT',sell:170.36,cost:116.17,profit:25.14,roi:22,map:false},
  {rank:374,brand:'WARE',name:'LOUNGE AROUND-N-SCRATCH CAT FURNITURE',category:'CAT',sell:184.35,cost:125.71,profit:27.49,roi:22,map:false},
  {rank:375,brand:'WARE',name:'KITTY SLEEP SLIPPER',category:'CAT',sell:170.18,cost:116.04,profit:25.11,roi:22,map:false},
  {rank:376,brand:'WARE',name:'KITTY HANGOUT',category:'CAT',sell:175.2,cost:119.44,profit:25.98,roi:22,map:false},
  {rank:377,brand:'WARE',name:'KITTY DINER & PLAYHOUSE',category:'CAT',sell:231.96,cost:158.16,profit:35.51,roi:22,map:false},
  {rank:378,brand:'WARE',name:'KITTY CAT TOWER W ROPE',category:'CAT',sell:172.38,cost:117.53,profit:25.49,roi:22,map:false},
  {rank:379,brand:'WARE',name:'DOUBLE CAT BEDS W/ ROPE',category:'CAT',sell:137.27,cost:93.58,profit:19.6,roi:21,map:false},
  {rank:380,brand:'WARE',name:'PLATFORM STEPS',category:'CAT',sell:130.23,cost:88.8,profit:18.4,roi:21,map:false},
  {rank:381,brand:'WARE',name:'PLAYGROUND PERCH W/ CARDBOARD',category:'CAT',sell:133.31,cost:90.89,profit:18.92,roi:21,map:false},
  {rank:382,brand:'WARE',name:'SCRATCH N NEST W/ BED',category:'CAT',sell:156.37,cost:106.64,profit:22.77,roi:21,map:false},
  {rank:383,brand:'WARE',name:'REST & PLAY TUNNEL W/ ROPE',category:'CAT',sell:158.22,cost:107.86,profit:23.13,roi:21,map:false},
  {rank:384,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC HANGING TRAY FEEDER',category:'BIRD',sell:29.99,cost:13.12,profit:8.87,roi:68,map:true},
  {rank:385,brand:'RACCOON BUSTER',name:'RACCOON BUSTER TRAY KIT',category:'BIRD',sell:135.95,cost:67.98,profit:44.08,roi:65,map:true},
  {rank:386,brand:'LYRIC',name:'LYRIC SUNFLOWER KERNELS',category:'BIRD',sell:21.99,cost:9.29,profit:5.9,roi:64,map:true},
  {rank:387,brand:'BROME',name:'SQUIRREL SOLUTION 200 WILD BIRD FEEDER',category:'BIRD',sell:90.95,cost:45.48,profit:28.33,roi:62,map:true},
  {rank:388,brand:'BROME',name:'SQUIRREL SOLUTION 150 WILD BIRD FEEDER',category:'BIRD',sell:73.95,cost:36.98,profit:22.38,roi:61,map:true},
  {rank:389,brand:'SEED BUSTER',name:'SEED BUSTER  TRAY FEEDER & SEED CATCHER',category:'BIRD',sell:69.95,cost:34.98,profit:20.98,roi:60,map:true},
  {rank:390,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC BLUEBIRD FEEDER',category:'BIRD',sell:79.99,cost:40.4,profit:24.09,roi:60,map:true},
  {rank:391,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER PLUS WILD BIRD FEEDER',category:'BIRD',sell:129.25,cost:67.03,profit:39.33,roi:59,map:true},
  {rank:392,brand:'BROME',name:'BROME TUBE SOLUTION 200',category:'BIRD',sell:64.95,cost:32.48,profit:19.23,roi:59,map:true},
  {rank:393,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC FLY THRU FEEDER',category:'BIRD',sell:54.99,cost:27.27,profit:15.97,roi:59,map:true},
  {rank:394,brand:'BROME',name:'BROME MEGA 600 TUBE FEEDER',category:'BIRD',sell:56.45,cost:28.23,profit:16.25,roi:58,map:true},
  {rank:395,brand:'BROME',name:'BROME MEGA 600 TUBE FEEDER PODIUM KIT',category:'BIRD',sell:175.79,cost:92.83,profit:53.09,roi:57,map:true},
  {rank:396,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE ORIOLE FEEDER W/PROTECT WEATHERGUARD',category:'BIRD',sell:54.99,cost:27.78,profit:15.46,roi:56,map:true},
  {rank:397,brand:'BROME',name:'BROME TUBE SOLUTION 100',category:'BIRD',sell:45.95,cost:22.98,profit:12.58,roi:55,map:true},
  {rank:398,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE SQRL PROOF BIRD FDR W/POLE & BAFFLE',category:'BIRD',sell:119.0,cost:63.53,profit:34.12,roi:54,map:true},
  {rank:399,brand:'BROWN\'S',name:'TROPICAL CARNIVAL GOURMET SMALL HOOKBILL FOOD',category:'BIRD',sell:59.59,cost:30.56,profit:16.59,roi:54,map:true},
  {rank:400,brand:'GARDENSUP',name:'GARDENSUP HARVESTER POLE SYSTEM',category:'BIRD',sell:233.65,cost:128.18,profit:66.92,roi:52,map:true},
  {rank:401,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER SUET WILD BIRD FEEDER',category:'BIRD',sell:117.0,cost:63.53,profit:32.42,roi:51,map:true},
  {rank:402,brand:'RACCOON BUSTER',name:'RACCOON BUSTER GUARDIAN POLE',category:'BIRD',sell:326.22,cost:181.75,profit:92.04,roi:51,map:true},
  {rank:403,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER NUT WILD BIRD FEEDER',category:'BIRD',sell:99.19,cost:53.97,profit:26.84,roi:50,map:true},
  {rank:404,brand:'RACCOON BUSTER',name:'RACCON BUSTER BAFFLE',category:'BIRD',sell:123.1,cost:67.63,profit:33.51,roi:50,map:true},
  {rank:405,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER CLASSIC WILD BIRD FEEDER',category:'BIRD',sell:81.39,cost:44.17,profit:21.51,roi:49,map:true},
  {rank:406,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER FINCH WILD BIRD FEEDER',category:'BIRD',sell:78.46,cost:42.49,profit:20.7,roi:49,map:true},
  {rank:407,brand:'BIRDSUP',name:'BIRDSUP VERSA POLE',category:'BIRD',sell:166.61,cost:92.39,profit:45.73,roi:49,map:true},
  {rank:408,brand:'NATURE\'S WAY',name:'DECORATIVE BIRD HOUSES',category:'BIRD',sell:1055.58,cost:600.96,profit:292.78,roi:49,map:false},
  {rank:409,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER LEGACY WILD BIRD FEEDER',category:'BIRD',sell:77.16,cost:41.94,profit:20.15,roi:48,map:true},
  {rank:410,brand:'BROWN\'S',name:'TROPICAL CARNIVAL GOURMET LARGE HOOKBILL FOOD',category:'BIRD',sell:35.49,cost:18.01,profit:8.66,roi:48,map:true},
  {rank:411,brand:'RACCOON BUSTER',name:'RACCOON BUSTER ARM KIT',category:'BIRD',sell:102.9,cost:57.18,profit:26.78,roi:47,map:true},
  {rank:412,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER STANDARD WILD BIRD FEEDER',category:'BIRD',sell:61.84,cost:33.62,profit:15.44,roi:46,map:true},
  {rank:413,brand:'BIRDSUP',name:'BIRDSUP HANGING BRACKET',category:'BIRD',sell:54.52,cost:29.3,profit:13.54,roi:46,map:true},
  {rank:414,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC BLUEBIRD HOUSE',category:'BIRD',sell:49.99,cost:26.69,profit:12.3,roi:46,map:true},
  {rank:415,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC HOPPER FEEDER',category:'BIRD',sell:49.99,cost:26.69,profit:12.3,roi:46,map:true},
  {rank:416,brand:'SQUIRREL BUSTER',name:'SQUIRREL BUSTER WEATHER GUARD',category:'BIRD',sell:34.48,cost:17.76,profit:8.05,roi:45,map:true},
  {rank:417,brand:'BIRDSUP',name:'BIRDSUP SINGLE POLE',category:'BIRD',sell:75.38,cost:41.66,profit:18.91,roi:45,map:true},
  {rank:418,brand:'BROWN\'S',name:'TROPICAL CARNIVAL GOURMET MACAW BIG BITES FOOD',category:'BIRD',sell:94.29,cost:52.97,profit:23.68,roi:45,map:true},
  {rank:419,brand:'KAYTEE',name:'KAYTEE FIESTA COCKATIEL FOOD',category:'BIRD',sell:118.26,cost:67.2,profit:29.82,roi:44,map:false},
  {rank:420,brand:'BIRD\'S CHOICE',name:'BIRD\'S CHOICE RECYCLED PLASTIC HOPPER FEEDER',category:'BIRD',sell:39.99,cost:21.21,profit:9.28,roi:44,map:true},
  {rank:421,brand:'NATURE\'S WAY',name:'TRIPLE CHAMBER BAT HOUSE',category:'BIRD',sell:93.62,cost:53.19,profit:22.89,roi:43,map:false},
  {rank:422,brand:'OMEGA ONE',name:'OMEGA ONE ADULT TURTLE STICK',category:'REPTILE',sell:62.74,cost:35.63,profit:14.2,roi:40,map:false},
  {rank:423,brand:'TETRA',name:'TETRA REPTOMIN FLOATING FOOD STICKS',category:'REPTILE',sell:64.76,cost:36.78,profit:14.77,roi:40,map:false},
  {rank:424,brand:'KOMODO REPTILE',name:'KOMODO JELLY POTS FRUIT DISPLAY',category:'REPTILE',sell:41.89,cost:23.6,profit:8.51,roi:36,map:false},
  {rank:425,brand:'KOMODO REPTILE',name:'KOMODO WOOD CORNER BOWL',category:'REPTILE',sell:51.12,cost:29.61,profit:10.34,roi:35,map:false},
  {rank:426,brand:'KOMODO REPTILE',name:'KOMODO BONSAI TREE WITH HIDE',category:'REPTILE',sell:44.52,cost:25.79,profit:8.55,roi:33,map:false},
  {rank:427,brand:'KOMODO REPTILE',name:'KOMODO MAGNETIC  ROCK LEDGE',category:'REPTILE',sell:45.4,cost:26.32,profit:8.77,roi:33,map:false},
  {rank:428,brand:'TETRA',name:'TETRA REPTILE FILTER',category:'REPTILE',sell:37.57,cost:21.35,profit:7.08,roi:33,map:false},
  {rank:429,brand:'KOMODO REPTILE',name:'KOMODO CORNER HUT',category:'REPTILE',sell:41.7,cost:24.18,profit:7.76,roi:32,map:false},
  {rank:430,brand:'KOMODO REPTILE',name:'KOMODO MAGNETIC BASKING LEDGE',category:'REPTILE',sell:41.7,cost:24.18,profit:7.76,roi:32,map:false},
  {rank:431,brand:'KOMODO REPTILE',name:'KOMODO MAGNETIC FEEDING LEDGE',category:'REPTILE',sell:37.39,cost:21.65,profit:6.63,roi:31,map:false},
  {rank:432,brand:'ZOO MED',name:'REPTITHERM UNDER TANK HEATER',category:'REPTILE',sell:39.98,cost:23.51,profit:6.97,roi:30,map:true},
  {rank:433,brand:'KOMODO REPTILE',name:'KOMODO ROCK BURROW HIDE',category:'REPTILE',sell:33.52,cost:19.43,profit:5.56,roi:29,map:false},
  {rank:434,brand:'KOMODO REPTILE',name:'KOMODO T-REX SKULL',category:'REPTILE',sell:32.99,cost:19.13,profit:5.41,roi:28,map:false},
  {rank:435,brand:'KOMODO REPTILE',name:'KOMODO WHITE VEIN STANDING PLANT',category:'REPTILE',sell:28.15,cost:16.3,profit:4.13,roi:25,map:false},
  {rank:436,brand:'KOMODO REPTILE',name:'KOMODO EMERALD VINE STANDING PLANT',category:'REPTILE',sell:28.15,cost:16.3,profit:4.13,roi:25,map:false},
  {rank:437,brand:'KOMODO REPTILE',name:'KOMODO SPOTTED BEGONIA PLANT',category:'REPTILE',sell:28.15,cost:16.3,profit:4.13,roi:25,map:false},
  {rank:438,brand:'KOMODO REPTILE',name:'KOMODO MONSTERA STANDING PLANT',category:'REPTILE',sell:28.15,cost:16.3,profit:4.13,roi:25,map:false},
  {rank:439,brand:'ZOO MED',name:'REPTISOIL',category:'REPTILE',sell:29.98,cost:17.54,profit:4.44,roi:25,map:true},
  {rank:440,brand:'ZOO MED',name:'PREMIUM REPTI BARK NATURAL REPTILE BEDDING',category:'REPTILE',sell:29.98,cost:17.54,profit:4.44,roi:25,map:true},
  {rank:441,brand:'ZOO MED',name:'FOREST FLOOR BEDDING',category:'REPTILE',sell:29.98,cost:17.54,profit:4.44,roi:25,map:true},
  {rank:442,brand:'ZOO MED',name:'REPTI HABITAT PRO 120',category:'REPTILE',sell:459.79,cost:313.49,profit:73.83,roi:24,map:false},
  {rank:443,brand:'ZOO MED',name:'REPTIBREEZE CHAMELEON KIT DELUXE',category:'REPTILE',sell:277.1,cost:188.93,profit:43.1,roi:23,map:false},
  {rank:444,brand:'ZOO MED',name:'REPTIHABITAT DOUBLE DOOR TERRARIUM',category:'REPTILE',sell:198.87,cost:135.59,profit:29.95,roi:22,map:false},
  {rank:445,brand:'ZOO MED',name:'REPTIHABITAT PREMIUM LEOPARD GECKO KIT',category:'REPTILE',sell:215.15,cost:146.68,profit:32.7,roi:22,map:false},
  {rank:446,brand:'ZOO MED',name:'ENVIRONMENTAL CONTROL CENTER',category:'REPTILE',sell:135.78,cost:92.58,profit:19.33,roi:21,map:false},
  {rank:447,brand:'ZOO MED',name:'REPTISUN LED WITH SUNRISE AND SUNSET TIMER',category:'REPTILE',sell:126.27,cost:86.08,profit:17.75,roi:21,map:false},
  {rank:448,brand:'ZOO MED',name:'REPTISUN LED WITH SUNRISE AND SUNSET TIMER',category:'REPTILE',sell:160.15,cost:109.22,profit:23.41,roi:21,map:false},
  {rank:449,brand:'AQUATOP',name:'AQUATOP GLASS TERRARIUM WITH MESH TOP',category:'REPTILE',sell:104.89,cost:71.53,profit:14.13,roi:20,map:false},
  {rank:450,brand:'ZILLA',name:'ZILLA SLIMLINE DESERT LIGHT FIXTURE W/ T8 BULB',category:'REPTILE',sell:100.14,cost:68.25,profit:13.37,roi:20,map:false},
  {rank:451,brand:'RIO+',name:'RIO+ AQUA PUMP',category:'AQUATICS',sell:154.99,cost:86.89,profit:41.35,roi:48,map:true},
  {rank:452,brand:'GLOFISH',name:'GLOFISH AQUARIUM KIT LED CYCLE DESKTOP',category:'AQUATICS',sell:223.25,cost:126.84,profit:59.42,roi:47,map:false},
  {rank:453,brand:'TETRA',name:'TETRA SINGLE CUBE BETTA CUPS',category:'AQUATICS',sell:150.56,cost:85.55,profit:38.93,roi:46,map:false},
  {rank:454,brand:'RIO+',name:'RIO+ AQUA PUMP',category:'AQUATICS',sell:95.49,cost:53.47,profit:24.2,roi:45,map:true},
  {rank:455,brand:'GLOFISH',name:'GLOFISH LED CRESCENT AQUARIUM KIT',category:'AQUATICS',sell:138.68,cost:78.82,profit:35.56,roi:45,map:false},
  {rank:456,brand:'GLOFISH',name:'GLOFISH BETTA TRILOGY AQUARIUM',category:'AQUATICS',sell:143.26,cost:81.41,profit:36.86,roi:45,map:false},
  {rank:457,brand:'TETRA',name:'TETRA WHISPER AQUARIUM AIR PUMP',category:'AQUATICS',sell:104.18,cost:59.21,profit:25.84,roi:44,map:false},
  {rank:458,brand:'TETRA',name:'TETRAMIN TROPICAL FLAKES',category:'AQUATICS',sell:107.62,cost:61.17,profit:26.81,roi:44,map:false},
  {rank:459,brand:'OMEGA ONE',name:'OMEGA ONE VEGGIE ROUND',category:'AQUATICS',sell:98.46,cost:55.93,profit:24.26,roi:43,map:false},
  {rank:460,brand:'OMEGA ONE',name:'OMEGA ONE SEAWEED GREEN',category:'AQUATICS',sell:100.05,cost:56.86,profit:24.68,roi:43,map:false},
  {rank:461,brand:'RIO+',name:'RIO+ AQUA PUMP',category:'AQUATICS',sell:74.99,cost:42.24,profit:18.0,roi:43,map:true},
  {rank:462,brand:'AQUATOP',name:'MAXFLOW CIRCULATION PUMP',category:'AQUATICS',sell:37.99,cost:20.26,profit:8.53,roi:42,map:true},
  {rank:463,brand:'OMEGA ONE',name:'OMEGA ONE SINK SUPER COLOR CICHLID PELLET',category:'AQUATICS',sell:79.28,cost:45.03,profit:18.86,roi:42,map:false},
  {rank:464,brand:'TETRA',name:'TETRA WHISPER X70 POWER FILTER',category:'AQUATICS',sell:82.71,cost:47.01,profit:19.79,roi:42,map:false},
  {rank:465,brand:'TETRA',name:'TETRA WHISPER POWER FILTER 60',category:'AQUATICS',sell:76.02,cost:43.21,profit:17.91,roi:41,map:false},
  {rank:466,brand:'MARINELAND',name:'MARINELAND MAXI-JET 900 PRO',category:'AQUATICS',sell:61.94,cost:35.19,profit:13.96,roi:40,map:false},
  {rank:467,brand:'MARINELAND',name:'MARINELAND MAXI-JET 1200 PRO',category:'AQUATICS',sell:68.1,cost:38.72,profit:15.66,roi:40,map:false},
  {rank:468,brand:'RIO+',name:'RIO+ AQUA PUMP',category:'AQUATICS',sell:51.29,cost:28.7,profit:11.4,roi:40,map:true},
  {rank:469,brand:'TETRA',name:'TETRA WHISPER POWER FILTER 40',category:'AQUATICS',sell:55.52,cost:31.53,profit:12.16,roi:39,map:false},
  {rank:470,brand:'OMEGA ONE',name:'OMEGA ONE CICHLID PELLET',category:'AQUATICS',sell:52.44,cost:29.82,profit:11.25,roi:38,map:false},
  {rank:471,brand:'MARINELAND',name:'MARINELAND MAXI-JET 600 PRO',category:'AQUATICS',sell:53.58,cost:30.46,profit:11.58,roi:38,map:false},
  {rank:472,brand:'TETRA',name:'TETRA WHISPER X30 POWER FILTER',category:'AQUATICS',sell:53.67,cost:30.48,profit:11.64,roi:38,map:false},
  {rank:473,brand:'MARINELAND',name:'MARINELAND MAXI-JET 400 PRO',category:'AQUATICS',sell:47.51,cost:26.99,profit:9.89,roi:37,map:false},
  {rank:474,brand:'MARINELAND',name:'MARINELAND DIAMOND BLACK ACTIVATED CARBON',category:'AQUATICS',sell:44.43,cost:25.27,profit:9.0,roi:36,map:false},
  {rank:475,brand:'AQUATOP',name:'MAXFLOW CPS-1 CIRCULATING PUMP',category:'AQUATICS',sell:33.99,cost:18.84,profit:6.55,roi:35,map:true},
  {rank:476,brand:'AQUAVITRO',name:'AQUAVITRO FUEL',category:'AQUATICS',sell:41.79,cost:23.77,profit:8.25,roi:35,map:false},
  {rank:477,brand:'OMEGA ONE',name:'OMEGA ONE FRESHWATER FLAKE',category:'AQUATICS',sell:43.46,cost:24.72,profit:8.72,roi:35,map:false},
  {rank:478,brand:'OMEGA ONE',name:'OMEGA ONE CICHLID FLAKE',category:'AQUATICS',sell:42.58,cost:24.2,profit:8.49,roi:35,map:false},
  {rank:479,brand:'OMEGA ONE',name:'OMEGA ONE SUPER COLOR FLAKE',category:'AQUATICS',sell:43.2,cost:24.56,profit:8.66,roi:35,map:false},
  {rank:480,brand:'BROWN\'S',name:'TROPICAL CARNIVAL NATURAL BEHAVIORS TIMOTHY HAY',category:'SMALL ANIMAL',sell:57.14,cost:29.58,profit:15.49,roi:52,map:true},
  {rank:481,brand:'MIDWEST HOMES',name:'WABBITAT RABBIT CAGE',category:'SMALL ANIMAL',sell:164.82,cost:93.67,profit:42.93,roi:46,map:false},
  {rank:482,brand:'KAYTEE',name:'KAYTEE FIESTA GUINEA PIG FOOD',category:'SMALL ANIMAL',sell:94.59,cost:53.77,profit:23.13,roi:43,map:false},
  {rank:483,brand:'MARSHALL',name:'MARSHALL POP-N-PLAY BALL PIT',category:'SMALL ANIMAL',sell:36.99,cost:19.82,profit:8.12,roi:41,map:true},
  {rank:484,brand:'MIDWEST HOMES',name:'SMALL ANIMAL PLAY PEN',category:'SMALL ANIMAL',sell:60.71,cost:34.48,profit:13.62,roi:40,map:false},
  {rank:485,brand:'KAYTEE',name:'KAYTEE ASPEN BEDDING & LITTER',category:'SMALL ANIMAL',sell:47.42,cost:26.95,profit:9.86,roi:37,map:false},
  {rank:486,brand:'VITAKRAFT',name:'NATURAL CORN COB BEDDING & LITTER',category:'SMALL ANIMAL',sell:54.98,cost:31.87,profit:11.36,roi:36,map:true},
  {rank:487,brand:'BROWN\'S',name:'TROPICAL CARNIVAL GOURMET PET RABBIT FOOD',category:'SMALL ANIMAL',sell:35.49,cost:20.03,profit:6.64,roi:33,map:true},
  {rank:488,brand:'BROWN\'S',name:'TROPICAL CARNIVAL GOURMET GUINEA PIG FOOD',category:'SMALL ANIMAL',sell:35.49,cost:20.03,profit:6.64,roi:33,map:true},
  {rank:489,brand:'KAYTEE',name:'KAYTEE ASPEN BEDDING & LITTER',category:'SMALL ANIMAL',sell:31.41,cost:17.83,profit:5.37,roi:30,map:false},
  {rank:490,brand:'KAYTEE',name:'KAYTEE PINE BEDDING',category:'SMALL ANIMAL',sell:30.88,cost:17.57,profit:5.18,roi:29,map:false},
  {rank:491,brand:'KAYTEE',name:'KAYTEE TIMOTHY HIDEOUT',category:'SMALL ANIMAL',sell:30.0,cost:17.05,profit:4.95,roi:29,map:false},
  {rank:492,brand:'KAYTEE',name:'CLEAN & COZY NATURAL SMALL PET BEDDING',category:'SMALL ANIMAL',sell:29.12,cost:16.56,profit:4.69,roi:28,map:false},
  {rank:493,brand:'OXBOW ANIMAL HEALTH',name:'OXBOW WESTERN TIMOTHY HAY DUMP BIN',category:'SMALL ANIMAL',sell:195.03,cost:128.16,profit:34.12,roi:27,map:true},
  {rank:494,brand:'WARE',name:'PREMIUM PLUS BUNNY BARN',category:'SMALL ANIMAL',sell:675.92,cost:460.86,profit:110.17,roi:24,map:false},
  {rank:495,brand:'A&E',name:'DELUXE RABBIT CAGE & STAND',category:'SMALL ANIMAL',sell:319.17,cost:217.64,profit:50.15,roi:23,map:false},
  {rank:496,brand:'PREVUE PET',name:'FERRET DELIGHT HOME',category:'SMALL ANIMAL',sell:417.82,cost:284.89,profit:66.76,roi:23,map:false},
  {rank:497,brand:'WARE',name:'CRITTER CONNECTION CAGE',category:'SMALL ANIMAL',sell:238.47,cost:162.59,profit:36.61,roi:23,map:false},
  {rank:498,brand:'A&E',name:'FERRET KIT W/TUBES',category:'SMALL ANIMAL',sell:204.59,cost:139.51,profit:30.89,roi:22,map:false},
  {rank:499,brand:'HIGGINS',name:'SUNBURST GOURMET BLEND HAMSTER & GERBIL',category:'SMALL ANIMAL',sell:70.85,cost:46.32,profit:10.4,roi:22,map:true},
  {rank:500,brand:'HIGGINS',name:'SUNBURST GOURMET BLEND GUINEA PIG',category:'SMALL ANIMAL',sell:65.1,cost:42.4,profit:9.44,roi:22,map:true},
  {rank:501,brand:'PREVUE PET',name:'SMALL ANIMAL TUBBY CAGE',category:'SMALL ANIMAL',sell:219.2,cost:149.45,profit:33.37,roi:22,map:false},
  {rank:502,brand:'PREVUE PET',name:'SMALL ANIMAL HOME UNIVERSAL',category:'SMALL ANIMAL',sell:185.14,cost:126.26,profit:27.61,roi:22,map:false},
  {rank:503,brand:'PREVUE PET',name:'RABBIT HUTCH SMALL',category:'SMALL ANIMAL',sell:181.98,cost:124.07,profit:27.11,roi:22,map:false},
  {rank:504,brand:'PREVUE PET',name:'SMALL RABBIT PLAYPEN',category:'SMALL ANIMAL',sell:192.89,cost:131.51,profit:28.95,roi:22,map:false},
  {rank:505,brand:'SUNSEED',name:'VITA RABBIT FOOD',category:'SMALL ANIMAL',sell:43.98,cost:27.77,profit:6.11,roi:22,map:true},
  {rank:506,brand:'SUNSEED',name:'FRESH WORLD BEDDING ORIGINAL STORE USE ONLY',category:'SMALL ANIMAL',sell:34.98,cost:21.48,profit:4.75,roi:22,map:true},
  {rank:507,brand:'A&E',name:'A&E SMALL ANIMAL CAGE',category:'SMALL ANIMAL',sell:147.3,cost:100.44,profit:21.26,roi:21,map:false},
  {rank:508,brand:'A&E',name:'RABBIT CAGE WITH RAMP & PLATFORM',category:'SMALL ANIMAL',sell:155.49,cost:106.03,profit:22.64,roi:21,map:false},
  {rank:509,brand:'A&E',name:'RABBIT CAGE WITH RAMP & PLATFORM',category:'SMALL ANIMAL',sell:139.12,cost:94.87,profit:19.88,roi:21,map:false},
  {rank:510,brand:'MELNOR',name:'METAL PULSATING SPRINKLER W/TRIPOD',category:'PET SUPPLIES',sell:190.07,cost:53.98,profit:104.08,roi:193,map:false},
  {rank:511,brand:'GOOD IDEAS',name:'IMPRESSIONS WILLOW RAIN BARREL',category:'PET SUPPLIES',sell:444.39,cost:156.8,profit:217.43,roi:139,map:false},
  {rank:512,brand:'GOOD IDEAS',name:'RAIN WIZARD RAIN BARREL',category:'PET SUPPLIES',sell:307.99,cost:148.15,profit:110.14,roi:74,map:false},
  {rank:513,brand:'BLOEM',name:'BLOEM RAILSCAPE DISPLAY',category:'PET SUPPLIES',sell:2231.28,cost:1104.48,profit:788.61,roi:71,map:true},
  {rank:514,brand:'PETKORE',name:'PETKORE EQUINE CLOVER BALL',category:'PET SUPPLIES',sell:64.99,cost:30.33,profit:21.41,roi:71,map:true},
  {rank:515,brand:'BLOEM',name:'BLOEM EZ POUR WATERING CAN',category:'PET SUPPLIES',sell:50.99,cost:25.02,profit:14.82,roi:59,map:true},
  {rank:516,brand:'PETKORE',name:'PETKORE EQUINE LUNA RING WITH HANGING KIT',category:'PET SUPPLIES',sell:32.99,cost:15.44,profit:9.1,roi:59,map:true},
  {rank:517,brand:'BLOEM',name:'BLOEM PINK FLAMINGO',category:'PET SUPPLIES',sell:36.99,cost:18.14,profit:9.8,roi:54,map:true},
  {rank:518,brand:'MICROCYN LIVESTOCK',name:'MICROCYN SKIN AND WOUND HYDROGEL',category:'PET SUPPLIES',sell:34.99,cost:17.44,profit:8.8,roi:50,map:true},
  {rank:519,brand:'BLOEM',name:'BLOEM ARIANA PLANTER DISPLAY',category:'PET SUPPLIES',sell:1391.52,cost:786.24,profit:393.05,roi:50,map:true},
  {rank:520,brand:'ALZOO',name:'ALZOO MINERAL-BASED HORSE STALL DEODORIZER',category:'PET SUPPLIES',sell:34.99,cost:17.49,profit:8.75,roi:50,map:true},
  {rank:521,brand:'BLOEM',name:'BLOEM RAILSCAPE',category:'PET SUPPLIES',sell:30.99,cost:15.34,profit:7.5,roi:49,map:true},
  {rank:522,brand:'STARBAR',name:'STARBAR TOWER FLOOR DISPLAY',category:'PET SUPPLIES',sell:697.22,cost:396.3,profit:192.84,roi:49,map:false},
  {rank:523,brand:'PETKORE',name:'PETKORE EQUINE FLEX BALL & TAIL',category:'PET SUPPLIES',sell:23.99,cost:11.32,profit:5.57,roi:49,map:true},
  {rank:524,brand:'PETKORE',name:'PETKORE EQUINE GROOMRAKER',category:'PET SUPPLIES',sell:21.99,cost:10.26,profit:4.93,roi:48,map:true},
  {rank:525,brand:'MICROCYN LIVESTOCK',name:'MICROCYN HOOF CARE SPRAY',category:'PET SUPPLIES',sell:32.99,cost:16.83,profit:7.71,roi:46,map:true},
  {rank:526,brand:'MICROCYN LIVESTOCK',name:'MICROCYN PINK EYE SOLUTION',category:'PET SUPPLIES',sell:32.99,cost:16.83,profit:7.71,roi:46,map:true},
  {rank:527,brand:'MICROCYN LIVESTOCK',name:'MICROCYN TEAT AND UDDER SPRAY',category:'PET SUPPLIES',sell:32.99,cost:16.83,profit:7.71,roi:46,map:true},
  {rank:528,brand:'MICROCYN LIVESTOCK',name:'MICROCYN POULTRY CARE SPRAY',category:'PET SUPPLIES',sell:32.99,cost:16.83,profit:7.71,roi:46,map:true},
  {rank:529,brand:'BLOEM',name:'BLOEM MINI PINK FLAMINGO',category:'PET SUPPLIES',sell:24.99,cost:12.18,profit:5.56,roi:46,map:true},
  {rank:530,brand:'IMPERIAL WHITETAIL',name:'IMPERIAL WHITETAIL GRUNT N GOBBLE',category:'PET SUPPLIES',sell:46.9,cost:24.84,profit:11.53,roi:46,map:false},
  {rank:531,brand:'MELNOR',name:'HYDROLOGIC 3-ZONE DIGITAL WATER TIMER W/ECO MODE',category:'PET SUPPLIES',sell:152.23,cost:86.5,profit:39.4,roi:46,map:false},
  {rank:532,brand:'BLOEM',name:'BLOEM CANYON METAL PLANTER',category:'PET SUPPLIES',sell:81.99,cost:45.62,profit:20.57,roi:45,map:true},
  {rank:533,brand:'BULLY TOOLS',name:'BULLY TOOLS LOOP HOE W/FIBERGLASS HANDLE',category:'PET SUPPLIES',sell:47.99,cost:25.8,profit:11.49,roi:45,map:true},
  {rank:534,brand:'PAGE\'S SEEDS',name:'PAGE\'S PREMIUM HUMMINGBIRD COUNTER DISPLAY',category:'PET SUPPLIES',sell:415.8,cost:242.5,profit:107.43,roi:44,map:false},
  {rank:535,brand:'PAGE\'S SEEDS',name:'PAGE\'S PREMIUM BUTTERFLY COUNTER DISPLAY',category:'PET SUPPLIES',sell:415.8,cost:242.5,profit:107.43,roi:44,map:false},
  {rank:536,brand:'BLOEM',name:'BLOEM CANYON METAL PLANTER',category:'PET SUPPLIES',sell:62.99,cost:35.03,profit:15.01,roi:43,map:true},
  {rank:537,brand:'STARBAR',name:'QUIKSTRIKE FLY SCATTER BAIT',category:'PET SUPPLIES',sell:91.42,cost:51.93,profit:22.28,roi:43,map:false},
  {rank:538,brand:'MELNOR',name:'HYDROLOGIC 2-ZONE DIGITAL WATER TIMER W/ECO MODE',category:'PET SUPPLIES',sell:96.35,cost:54.77,profit:23.63,roi:43,map:false},
  {rank:539,brand:'HEALTHY HAIRCARE',name:'HEALTHY HAIRCARE HAIR MOISTURIZER CONCENTRATE',category:'PET SUPPLIES',sell:83.68,cost:47.54,profit:20.09,roi:42,map:false},
  {rank:540,brand:'MELNOR',name:'TURBO OSCILLATING SPRINKLER SLED W/FLOW CONTROL',category:'PET SUPPLIES',sell:82.18,cost:46.68,profit:19.67,roi:42,map:false},
  {rank:541,brand:'MELNOR',name:'TURBO OSCILLATING SPRINKLER W/BRASS NOZZLES',category:'PET SUPPLIES',sell:76.11,cost:43.24,profit:17.95,roi:42,map:false},
  {rank:542,brand:'MELNOR',name:'TURBO OSCILLATING SPRINKLER W/INTEGRATED TIMER',category:'PET SUPPLIES',sell:77.52,cost:44.05,profit:18.34,roi:42,map:false},
  {rank:543,brand:'BLOEM',name:'BLOEM ARBOR METAL PLANTER',category:'PET SUPPLIES',sell:50.99,cost:28.29,profit:11.55,roi:41,map:true},
  {rank:544,brand:'NATURE\'S MACE',name:'NATURE\'S MACE MOSQUITO REPELLENT CONCENTRATE',category:'PET SUPPLIES',sell:62.97,cost:35.42,profit:14.6,roi:41,map:true},
  {rank:545,brand:'MELNOR',name:'HYDROLOGIC 1-ZONE DIGITAL WATER TIMER W/ECO MODE',category:'PET SUPPLIES',sell:72.33,cost:41.09,profit:16.89,roi:41,map:false},
  {rank:546,brand:'O-CEDAR COMMERCIAL',name:'MAXI-ROUGH TRASH CONTAINER',category:'PET SUPPLIES',sell:72.24,cost:41.05,profit:16.85,roi:41,map:false},
  {rank:547,brand:'Keurig',name:'Keurig K-Classic Coffee Maker Single Serve K-Cup',category:'HOME & KITCHEN',sell:109.99,cost:44.0,profit:45.99,roi:105,map:true},
  {rank:548,brand:'Zojirushi',name:'Zojirushi NS-LGC05XB Micom Rice Cooker 3 Cup',category:'HOME & KITCHEN',sell:119.99,cost:48.0,profit:50.49,roi:105,map:true},
  {rank:549,brand:'Wusthof',name:'Wusthof Classic 8 inch Chef Knife',category:'HOME & KITCHEN',sell:119.99,cost:48.0,profit:50.49,roi:105,map:true},
  {rank:550,brand:'Ninja',name:'Ninja AF101 Air Fryer 4 Qt',category:'HOME & KITCHEN',sell:89.99,cost:36.0,profit:36.99,roi:103,map:true},
  {rank:551,brand:'Instant Pot',name:'Instant Pot Duo 3 Quart Mini',category:'HOME & KITCHEN',sell:79.99,cost:32.0,profit:32.49,roi:102,map:true},
  {rank:552,brand:'Cuisinart',name:'Cuisinart 12-Cup Coffee Maker Programmable',category:'HOME & KITCHEN',sell:69.99,cost:28.0,profit:27.99,roi:100,map:true},
  {rank:553,brand:'Rachael Ray',name:'Rachael Ray 14 Piece Nonstick Cookware Pots and Pans Set',category:'HOME & KITCHEN',sell:109.99,cost:45.0,profit:44.99,roi:100,map:true},
  {rank:554,brand:'Victorinox',name:'Victorinox Fibrox Pro 8 Inch Chefs Knife',category:'HOME & KITCHEN',sell:54.99,cost:22.0,profit:21.24,roi:97,map:true},
  {rank:555,brand:'Cuisinart',name:'Cuisinart 10-Piece Cookware Set Stainless Steel',category:'HOME & KITCHEN',sell:129.99,cost:55.0,profit:51.99,roi:95,map:true},
  {rank:556,brand:'Breville',name:'Breville BOV450XL Mini Smart Oven',category:'HOME & KITCHEN',sell:159.99,cost:68.0,profit:64.49,roi:95,map:true},
  {rank:557,brand:'Calphalon',name:'Calphalon Nonstick Cookware Set 10 Piece',category:'HOME & KITCHEN',sell:129.99,cost:55.0,profit:51.99,roi:95,map:true},
  {rank:558,brand:'Instant Pot',name:'Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Qt',category:'HOME & KITCHEN',sell:99.99,cost:42.0,profit:39.49,roi:94,map:true},
  {rank:559,brand:'Keurig',name:'Keurig K-Mini Plus Single Serve Coffee Maker',category:'HOME & KITCHEN',sell:99.99,cost:42.0,profit:39.49,roi:94,map:true},
  {rank:560,brand:'All-Clad',name:'All-Clad D3 Stainless Steel Fry Pan 10 inch',category:'HOME & KITCHEN',sell:99.99,cost:42.0,profit:39.49,roi:94,map:true},
  {rank:561,brand:'Cuisinart',name:'Cuisinart Hand Mixer 5-Speed White',category:'HOME & KITCHEN',sell:44.99,cost:18.0,profit:16.74,roi:93,map:true},
  {rank:562,brand:'Calphalon',name:'Calphalon Classic Nonstick 10 inch Fry Pan',category:'HOME & KITCHEN',sell:44.99,cost:18.0,profit:16.74,roi:93,map:true},
  {rank:563,brand:'Ninja',name:'Ninja BL610 Professional 72 Oz Countertop Blender',category:'HOME & KITCHEN',sell:89.99,cost:38.0,profit:34.99,roi:92,map:true},
  {rank:564,brand:'Vitamix',name:'Vitamix 5200 Blender Professional-Grade',category:'HOME & KITCHEN',sell:449.99,cost:200.0,profit:178.99,roi:89,map:true},
  {rank:565,brand:'Lodge',name:'Lodge Cast Iron Dutch Oven 5 Quart',category:'HOME & KITCHEN',sell:65.99,cost:28.0,profit:24.59,roi:88,map:true},
  {rank:566,brand:'Emile Henry',name:'Emile Henry Made in France Bread Loaf Baker',category:'HOME & KITCHEN',sell:74.99,cost:32.0,profit:28.24,roi:88,map:true},
  {rank:567,brand:'Lodge',name:'Lodge Cast Iron Skillet 10.25 inch Pre-Seasoned',category:'HOME & KITCHEN',sell:34.99,cost:14.0,profit:12.24,roi:87,map:true},
  {rank:568,brand:'KitchenAid',name:'KitchenAid Pasta Bowl Set 4-Piece',category:'HOME & KITCHEN',sell:34.99,cost:14.0,profit:12.24,roi:87,map:true},
  {rank:569,brand:'Lodge',name:'Lodge Cast Iron Skillet 12 inch Pre-Seasoned',category:'HOME & KITCHEN',sell:42.99,cost:18.0,profit:15.04,roi:84,map:true},
  {rank:570,brand:'OXO',name:'OXO Good Grips 12-Piece Silicone Cooking Utensil Set',category:'HOME & KITCHEN',sell:49.99,cost:22.0,profit:16.99,roi:77,map:true},
  {rank:571,brand:'Rubbermaid',name:'Rubbermaid Brilliance Food Storage Container Set 22 Piece',category:'HOME & KITCHEN',sell:49.99,cost:22.0,profit:16.99,roi:77,map:true},
  {rank:572,brand:'Hamilton Beach',name:'Hamilton Beach Stack and Snap Food Processor 10 Cup',category:'HOME & KITCHEN',sell:49.99,cost:22.0,profit:16.99,roi:77,map:true},
  {rank:573,brand:'Le Creuset',name:'Le Creuset Silicone Spatula Set 2 Piece',category:'HOME & KITCHEN',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:574,brand:'Lodge',name:'Lodge Cast Iron Griddle 10.5 inch Pre-Seasoned',category:'HOME & KITCHEN',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:575,brand:'Farberware',name:'Farberware Classic Stainless Steel Cookware Set 15 Piece',category:'HOME & KITCHEN',sell:69.99,cost:32.0,profit:23.99,roi:75,map:true},
  {rank:576,brand:'Joseph Joseph',name:'Joseph Joseph 5-Piece Adjustable Rolling Pin Set',category:'HOME & KITCHEN',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:577,brand:'Escali',name:'Escali Primo Digital Food Scale 11 lb',category:'HOME & KITCHEN',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:578,brand:'Progressive',name:'Progressive International Prepworks 18 Piece Food Storage Container Set',category:'HOME & KITCHEN',sell:36.99,cost:16.0,profit:11.94,roi:75,map:true},
  {rank:579,brand:'Pyrex',name:'Pyrex Ultimate Glass Food Storage Set 18 Piece',category:'HOME & KITCHEN',sell:52.99,cost:24.0,profit:17.54,roi:73,map:true},
  {rank:580,brand:'Nordic Ware',name:'Nordic Ware Pro Cast Traditions Bundt Pan',category:'HOME & KITCHEN',sell:48.99,cost:22.0,profit:16.14,roi:73,map:true},
  {rank:581,brand:'OXO',name:'OXO Good Grips 3-Piece Angled Measuring Cup Set',category:'HOME & KITCHEN',sell:28.99,cost:12.5,profit:8.64,roi:69,map:true},
  {rank:582,brand:'OXO',name:'OXO Good Grips Salad Spinner Large',category:'HOME & KITCHEN',sell:39.99,cost:18.0,profit:12.49,roi:69,map:true},
  {rank:583,brand:'Rubbermaid',name:'Rubbermaid Easy Find Vents Lids Food Storage Container Set 42 Piece',category:'HOME & KITCHEN',sell:39.99,cost:18.0,profit:12.49,roi:69,map:true},
  {rank:584,brand:'Black+Decker',name:'Black+Decker 12 Cup Programmable Coffee Maker',category:'HOME & KITCHEN',sell:39.99,cost:18.0,profit:12.49,roi:69,map:true},
  {rank:585,brand:'Cuisipro',name:'Cuisipro 4 Sided Box Grater Stainless Steel',category:'HOME & KITCHEN',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:586,brand:'Anchor Hocking',name:'Anchor Hocking Glass Food Storage Set 16 Piece',category:'HOME & KITCHEN',sell:38.99,cost:18.0,profit:11.64,roi:65,map:true},
  {rank:587,brand:'OXO',name:'OXO Good Grips 3-Piece Mixing Bowl Set',category:'HOME & KITCHEN',sell:34.99,cost:16.0,profit:10.24,roi:64,map:true},
  {rank:588,brand:'Hamilton Beach',name:'Hamilton Beach 2-Speed Hand Blender',category:'HOME & KITCHEN',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:589,brand:'Pyrex',name:'Pyrex Simply Store Glass Food Storage Set 18 Piece',category:'HOME & KITCHEN',sell:44.99,cost:22.0,profit:12.74,roi:58,map:true},
  {rank:590,brand:'Oster',name:'Oster 6 Cup Blender Classic Series 450 Watt',category:'HOME & KITCHEN',sell:29.99,cost:14.0,profit:7.99,roi:57,map:true},
  {rank:591,brand:'Anchor Hocking',name:'Anchor Hocking Montana Glass Jar 64 oz',category:'HOME & KITCHEN',sell:16.99,cost:7.0,profit:3.94,roi:56,map:true},
  {rank:592,brand:'Tovolo',name:'Tovolo Sphere Ice Molds Set of 2',category:'HOME & KITCHEN',sell:16.99,cost:7.0,profit:3.94,roi:56,map:true},
  {rank:593,brand:'Good Cook',name:'Good Cook Touch Digital Instant Read Meat Thermometer',category:'HOME & KITCHEN',sell:14.99,cost:6.0,profit:3.24,roi:54,map:true},
  {rank:594,brand:'KitchenAid',name:'KitchenAid Silicone Spatula Set 3 Piece',category:'HOME & KITCHEN',sell:18.99,cost:8.5,profit:4.14,roi:49,map:true},
  {rank:595,brand:'Nordic Ware',name:'Nordic Ware Natural Aluminum Commercial Baker Half Sheet',category:'HOME & KITCHEN',sell:18.99,cost:8.5,profit:4.14,roi:49,map:true},
  {rank:596,brand:'Trudeau',name:'Trudeau Maison Pastry Brush Set 2 Piece',category:'HOME & KITCHEN',sell:12.99,cost:5.5,profit:2.04,roi:37,map:true},
  {rank:597,brand:'Garden of Life',name:'Garden of Life Dr. Formulated Probiotics 30ct',category:'HEALTH & WELLNESS',sell:54.99,cost:22.0,profit:21.24,roi:97,map:true},
  {rank:598,brand:'Align Probiotic',name:'Align Probiotic Supplement 63 Capsules',category:'HEALTH & WELLNESS',sell:56.99,cost:24.0,profit:20.94,roi:87,map:true},
  {rank:599,brand:'Garden of Life',name:'Garden of Life Raw Organic Protein Vanilla 20 Servings',category:'HEALTH & WELLNESS',sell:64.99,cost:28.0,profit:23.74,roi:85,map:true},
  {rank:600,brand:'Tom Ford',name:'TheraTears Eye Drops Lubricant 1 oz 6 Pack',category:'HEALTH & WELLNESS',sell:38.99,cost:16.0,profit:13.64,roi:85,map:true},
  {rank:601,brand:'Osteo Bi-Flex',name:'Osteo Bi-Flex One Per Day Triple Strength Joint Supplement 60ct',category:'HEALTH & WELLNESS',sell:42.99,cost:18.0,profit:15.04,roi:84,map:true},
  {rank:602,brand:'Refresh',name:'Refresh Relieva PF Preservative-Free Eye Drops 100ct',category:'HEALTH & WELLNESS',sell:42.99,cost:18.0,profit:15.04,roi:84,map:true},
  {rank:603,brand:'Nature Made',name:'Nature Made Vitamin D3 2000 IU 260 Softgels',category:'HEALTH & WELLNESS',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:604,brand:'Schiff',name:'Schiff Move Free Advanced Joint Health Supplement 200ct',category:'HEALTH & WELLNESS',sell:49.99,cost:22.0,profit:16.99,roi:77,map:true},
  {rank:605,brand:'Airborne',name:'Airborne Immune Support Supplement Gummies 63ct Zesty Orange',category:'HEALTH & WELLNESS',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:606,brand:'Physician Formula',name:'Physicians Formula Organic Wear Mascara Black',category:'HEALTH & WELLNESS',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:607,brand:'Nature Made',name:'Nature Made Super B-Complex with Vitamin C 360 Tablets',category:'HEALTH & WELLNESS',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:608,brand:'MusclePharm',name:'MusclePharm Combat Protein Powder Chocolate Milk 5 lb',category:'HEALTH & WELLNESS',sell:69.99,cost:32.0,profit:23.99,roi:75,map:true},
  {rank:609,brand:'Vicks',name:'Vicks DayQuil Cold and Flu Relief 48 LiquiCaps',category:'HEALTH & WELLNESS',sell:36.99,cost:16.0,profit:11.94,roi:75,map:true},
  {rank:610,brand:'Sambucol',name:'Sambucol Black Elderberry Syrup Original 7.8 oz',category:'HEALTH & WELLNESS',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:611,brand:'Neutrogena',name:'Neutrogena Hydro Boost Water Gel Moisturizer SPF 15 3.4 oz',category:'HEALTH & WELLNESS',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:612,brand:'Bausch + Lomb',name:'Bausch + Lomb PreserVision AREDS 2 Eye Vitamin 210ct',category:'HEALTH & WELLNESS',sell:44.99,cost:20.0,profit:14.74,roi:74,map:true},
  {rank:613,brand:'Isopure',name:'Isopure Zero Carb Protein Powder Dutch Chocolate 3 lb',category:'HEALTH & WELLNESS',sell:64.99,cost:30.0,profit:21.74,roi:72,map:true},
  {rank:614,brand:'Optimum Nutrition',name:'Optimum Nutrition Gold Standard 100% Whey 5 lb Vanilla',category:'HEALTH & WELLNESS',sell:79.99,cost:38.0,profit:26.49,roi:70,map:true},
  {rank:615,brand:'BSN',name:'BSN Syntha-6 Protein Powder Chocolate Milkshake 5 lb',category:'HEALTH & WELLNESS',sell:79.99,cost:38.0,profit:26.49,roi:70,map:true},
  {rank:616,brand:'Nature Made',name:'Nature Made Fish Oil 1200mg Softgels 100ct',category:'HEALTH & WELLNESS',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:617,brand:'Nature Made',name:'Nature Made Magnesium Glycinate 200mg 60ct',category:'HEALTH & WELLNESS',sell:23.99,cost:10.0,profit:6.89,roi:69,map:true},
  {rank:618,brand:'NOW Foods',name:'NOW Foods Vitamin C 1000mg 250 Veg Capsules',category:'HEALTH & WELLNESS',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:619,brand:'NOW Foods',name:'NOW Foods Melatonin 5mg 180 Veg Capsules',category:'HEALTH & WELLNESS',sell:21.99,cost:9.0,profit:6.19,roi:69,map:true},
  {rank:620,brand:'Optimum Nutrition',name:'Optimum Nutrition Micronized Creatine Monohydrate Powder 600g',category:'HEALTH & WELLNESS',sell:39.99,cost:18.0,profit:12.49,roi:69,map:true},
  {rank:621,brand:'Emergen-C',name:'Emergen-C Daily Immune Support 1000mg Vitamin C 60 Packets',category:'HEALTH & WELLNESS',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:622,brand:'Cetaphil',name:'Cetaphil Gentle Skin Cleanser for Sensitive Skin 20 oz',category:'HEALTH & WELLNESS',sell:22.99,cost:9.5,profit:6.54,roi:69,map:true},
  {rank:623,brand:'CeraVe',name:'CeraVe Daily Moisturizing Lotion 19 oz',category:'HEALTH & WELLNESS',sell:23.99,cost:10.0,profit:6.89,roi:69,map:true},
  {rank:624,brand:'Spring Valley',name:'Spring Valley Probiotic Dietary Supplement 60ct',category:'HEALTH & WELLNESS',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:625,brand:'Vitafusion',name:'Vitafusion Power C Gummy Vitamins 150ct',category:'HEALTH & WELLNESS',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:626,brand:'NOW Foods',name:'NOW Foods Vitamin B-12 1000mcg 250 Lozenges',category:'HEALTH & WELLNESS',sell:20.99,cost:9.0,profit:5.34,roi:59,map:true},
  {rank:627,brand:'Zarbees',name:'Zarbees Naturals Childrens Sleep Liquid Melatonin Berry 8oz',category:'HEALTH & WELLNESS',sell:19.99,cost:8.5,profit:4.99,roi:59,map:true},
  {rank:628,brand:'NOW Foods',name:'NOW Foods Zinc 50mg 250 Tablets',category:'HEALTH & WELLNESS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:629,brand:'Optimum Nutrition',name:'Optimum Nutrition Gold Standard 100% Whey 2 lb Double Rich Chocolate',category:'HEALTH & WELLNESS',sell:44.99,cost:22.0,profit:12.74,roi:58,map:true},
  {rank:630,brand:'Natures Bounty',name:'Natures Bounty Hair Skin and Nails Gummies 80ct',category:'HEALTH & WELLNESS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:631,brand:'Bragg',name:'Bragg Organic Apple Cider Vinegar with the Mother 32 oz',category:'HEALTH & WELLNESS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:632,brand:'EOS',name:'EOS Shea Better Shave Cream Vanilla Bliss 7 oz',category:'HEALTH & WELLNESS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:633,brand:'Burt\'s Bees',name:'Burts Bees Classic Beeswax Lip Balm 4 Pack',category:'HEALTH & WELLNESS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:634,brand:'Natrol',name:'Natrol Melatonin 10mg Advanced Sleep 60 Tablets',category:'HEALTH & WELLNESS',sell:17.99,cost:7.5,profit:4.29,roi:57,map:true},
  {rank:635,brand:'Natrol',name:'Natrol Biotin 10000mcg Fast Dissolve Tablets 100ct',category:'HEALTH & WELLNESS',sell:16.99,cost:7.0,profit:3.94,roi:56,map:true},
  {rank:636,brand:'Natures Bounty',name:'Natures Bounty Vitamin C 500mg with Rose Hips 100ct',category:'HEALTH & WELLNESS',sell:14.99,cost:6.0,profit:3.24,roi:54,map:true},
  {rank:637,brand:'Black Diamond',name:'Black Diamond Storm 500 Headlamp',category:'SPORTS & OUTDOORS',sell:54.95,cost:22.0,profit:21.21,roi:96,map:true},
  {rank:638,brand:'Coleman',name:'Coleman Classic Steel Belted Portable Cooler 54 Qt',category:'SPORTS & OUTDOORS',sell:99.99,cost:42.0,profit:39.49,roi:94,map:true},
  {rank:639,brand:'Hydro Flask',name:'Hydro Flask All Around Travel Tumbler 40 oz Stone',category:'SPORTS & OUTDOORS',sell:44.95,cost:18.0,profit:16.71,roi:93,map:true},
  {rank:640,brand:'Franklin',name:'Franklin Sports MLB Road Trip Pitching Machine',category:'SPORTS & OUTDOORS',sell:89.99,cost:38.0,profit:34.99,roi:92,map:true},
  {rank:641,brand:'Hydro Flask',name:'Hydro Flask Wide Mouth Water Bottle 32 oz White',category:'SPORTS & OUTDOORS',sell:39.95,cost:16.0,profit:14.46,roi:90,map:true},
  {rank:642,brand:'Black Diamond',name:'Black Diamond Spot 400 Headlamp',category:'SPORTS & OUTDOORS',sell:39.95,cost:16.0,profit:14.46,roi:90,map:true},
  {rank:643,brand:'Petzl',name:'Petzl Tikka Headlamp 300 Lumens',category:'SPORTS & OUTDOORS',sell:39.95,cost:16.0,profit:14.46,roi:90,map:true},
  {rank:644,brand:'Manduka',name:'Manduka PRO Yoga Mat 6mm Midnight',category:'SPORTS & OUTDOORS',sell:120.0,cost:52.0,profit:46.5,roi:89,map:true},
  {rank:645,brand:'Igloo',name:'Igloo BMX 52 Qt Cooler',category:'SPORTS & OUTDOORS',sell:74.99,cost:32.0,profit:28.24,roi:88,map:true},
  {rank:646,brand:'Hydro Flask',name:'Hydro Flask Standard Mouth Water Bottle 21 oz Black',category:'SPORTS & OUTDOORS',sell:34.95,cost:14.0,profit:12.21,roi:87,map:true},
  {rank:647,brand:'MSR',name:'MSR PocketRocket Deluxe Stove',category:'SPORTS & OUTDOORS',sell:69.95,cost:30.0,profit:25.96,roi:87,map:true},
  {rank:648,brand:'Eno',name:'ENO DoubleNest Hammock Charcoal',category:'SPORTS & OUTDOORS',sell:64.95,cost:28.0,profit:23.71,roi:85,map:true},
  {rank:649,brand:'Osprey',name:'Osprey Daylite Plus Daypack 20L',category:'SPORTS & OUTDOORS',sell:65.0,cost:28.0,profit:23.75,roi:85,map:true},
  {rank:650,brand:'Nike',name:'Nike Elite Competition Basketball Size 7 Black',category:'SPORTS & OUTDOORS',sell:65.0,cost:28.0,profit:23.75,roi:85,map:true},
  {rank:651,brand:'Sea to Summit',name:'Sea to Summit Aeros Ultralight Pillow Regular',category:'SPORTS & OUTDOORS',sell:42.95,cost:18.0,profit:15.01,roi:83,map:true},
  {rank:652,brand:'RTIC',name:'RTIC Outdoors 52 Qt Hard Sided Ice Chest Cooler',category:'SPORTS & OUTDOORS',sell:89.99,cost:40.0,profit:32.99,roi:82,map:true},
  {rank:653,brand:'Coleman',name:'Coleman 316 Series Insulated Stainless Steel Tumbler 30 oz',category:'SPORTS & OUTDOORS',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:654,brand:'Eno',name:'ENO SingleNest Hammock Neon',category:'SPORTS & OUTDOORS',sell:49.95,cost:22.0,profit:16.96,roi:77,map:true},
  {rank:655,brand:'GSI Outdoors',name:'GSI Outdoors Halulite Microdualist Cookset',category:'SPORTS & OUTDOORS',sell:49.95,cost:22.0,profit:16.96,roi:77,map:true},
  {rank:656,brand:'Callaway',name:'Callaway Golf Supersoft Golf Balls White Dozen',category:'SPORTS & OUTDOORS',sell:24.99,cost:10.0,profit:7.74,roi:77,map:true},
  {rank:657,brand:'Taylormade',name:'TaylorMade TP5 Golf Balls White One Dozen',category:'SPORTS & OUTDOORS',sell:49.99,cost:22.0,profit:16.99,roi:77,map:true},
  {rank:658,brand:'Sockwell',name:'Sockwell Womens Circulator Moderate Graduated Compression Sock Medium Charcoal',category:'SPORTS & OUTDOORS',sell:28.99,cost:12.0,profit:9.14,roi:76,map:true},
  {rank:659,brand:'YETI',name:'YETI Rambler 64 oz Bottle Chug Cap',category:'SPORTS & OUTDOORS',sell:69.99,cost:32.0,profit:23.99,roi:75,map:true},
  {rank:660,brand:'Rawlings',name:'Rawlings Official League Recreational Use Baseball 12 Pack',category:'SPORTS & OUTDOORS',sell:36.99,cost:16.0,profit:11.94,roi:75,map:true},
  {rank:661,brand:'Trigger Point',name:'Trigger Point Grid Foam Roller 13 inch',category:'SPORTS & OUTDOORS',sell:36.99,cost:16.0,profit:11.94,roi:75,map:true},
  {rank:662,brand:'Gaiam',name:'Gaiam Yoga Mat Premium Print 6mm Dewdrop',category:'SPORTS & OUTDOORS',sell:36.98,cost:16.0,profit:11.93,roi:75,map:true},
  {rank:663,brand:'Stanley',name:'Stanley Quencher H2.0 FlowState Tumbler 40 oz',category:'SPORTS & OUTDOORS',sell:45.0,cost:20.0,profit:14.75,roi:74,map:true},
  {rank:664,brand:'Titleist',name:'Titleist Pro V1 Golf Balls One Dozen',category:'SPORTS & OUTDOORS',sell:55.99,cost:26.0,profit:18.09,roi:70,map:true},
  {rank:665,brand:'Princeton Tec',name:'Princeton Tec Byte Headlamp 70 Lumens',category:'SPORTS & OUTDOORS',sell:21.99,cost:9.0,profit:6.19,roi:69,map:true},
  {rank:666,brand:'CamelBak',name:'CamelBak Eddy+ Water Bottle 25 oz',category:'SPORTS & OUTDOORS',sell:28.0,cost:12.0,profit:8.3,roi:69,map:true},
  {rank:667,brand:'CamelBak',name:'CamelBak Chute Mag Water Bottle 25 oz Insulated',category:'SPORTS & OUTDOORS',sell:32.0,cost:14.0,profit:9.7,roi:69,map:true},
  {rank:668,brand:'Spalding',name:'Spalding NBA Street Basketball Outdoor 29.5 inch',category:'SPORTS & OUTDOORS',sell:39.99,cost:18.0,profit:12.49,roi:69,map:true},
  {rank:669,brand:'Under Armour',name:'Under Armour Resistor 3.0 No-Show Liner Socks 6-Pair',category:'SPORTS & OUTDOORS',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:670,brand:'Darn Tough',name:'Darn Tough Vermont Micro Crew Cushion Socks XL Black',category:'SPORTS & OUTDOORS',sell:24.0,cost:10.0,profit:6.9,roi:69,map:true},
  {rank:671,brand:'TheraBand',name:'TheraBand Resistance Band Set Heavy Duty',category:'SPORTS & OUTDOORS',sell:27.99,cost:12.0,profit:8.29,roi:69,map:true},
  {rank:672,brand:'Stanley',name:'Stanley Classic Legendary Camp Mug 12 oz',category:'SPORTS & OUTDOORS',sell:35.0,cost:16.0,profit:10.25,roi:64,map:true},
  {rank:673,brand:'YETI',name:'YETI Rambler 20 oz Tumbler Stainless Steel',category:'SPORTS & OUTDOORS',sell:38.0,cost:18.0,profit:10.8,roi:60,map:true},
  {rank:674,brand:'Penn',name:'Penn Championship Extra Duty Tennis Balls 3 Ball Can 4 Pack',category:'SPORTS & OUTDOORS',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:675,brand:'Nordic Lifting',name:'Nordic Lifting Knee Sleeves 1 Pair for Squats',category:'SPORTS & OUTDOORS',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:676,brand:'Balega',name:'Balega Hidden Comfort No-Show Socks S Grey',category:'SPORTS & OUTDOORS',sell:20.99,cost:9.0,profit:5.34,roi:59,map:true},
  {rank:677,brand:'Nalgene',name:'Nalgene Silo BPA-Free Water Bottle 48 oz',category:'SPORTS & OUTDOORS',sell:18.99,cost:8.0,profit:4.64,roi:58,map:true},
  {rank:678,brand:'YETI',name:'YETI Rambler 30 oz Tumbler Stainless Steel',category:'SPORTS & OUTDOORS',sell:44.0,cost:22.0,profit:11.9,roi:54,map:true},
  {rank:679,brand:'Nalgene',name:'Nalgene Wide Mouth BPA-Free Reusable Water Bottle 32 oz',category:'SPORTS & OUTDOORS',sell:14.99,cost:6.0,profit:3.24,roi:54,map:true},
  {rank:680,brand:'SPRI',name:'SPRI Xertube Resistance Bands Exercise Cords Heavy',category:'SPORTS & OUTDOORS',sell:14.99,cost:6.0,profit:3.24,roi:54,map:true},
  {rank:681,brand:'Fit Simplify',name:'Fit Simplify Resistance Loop Exercise Bands Set of 5',category:'SPORTS & OUTDOORS',sell:15.99,cost:7.0,profit:3.09,roi:44,map:true},
  {rank:682,brand:'Gamma Sports',name:'Gamma Sports Pressure Plus Tennis Balls 3 Pack',category:'SPORTS & OUTDOORS',sell:12.99,cost:5.5,profit:2.04,roi:37,map:true},
  {rank:683,brand:'Dunlop',name:'Dunlop ATP Championship Extra Duty Tennis Balls 3 Pack',category:'SPORTS & OUTDOORS',sell:12.99,cost:5.5,profit:2.04,roi:37,map:true},
  {rank:684,brand:'Wilson',name:'Wilson US Open Extra Duty Tennis Balls Can 3 Pack',category:'SPORTS & OUTDOORS',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:685,brand:'Rawlings',name:'Rawlings Official League Baseball OLB3',category:'SPORTS & OUTDOORS',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:686,brand:'Tumaz',name:'Tumaz Yoga Strap with 12 Loops',category:'SPORTS & OUTDOORS',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:687,brand:'Death Wish Coffee',name:'Death Wish Coffee Dark Roast Ground Coffee 1 lb',category:'GROCERY',sell:32.99,cost:14.0,profit:10.54,roi:75,map:true},
  {rank:688,brand:'Tervis',name:'Tervis Classic Collection Insulated Tumbler 16 oz Tie Dye',category:'GROCERY',sell:21.99,cost:9.0,profit:6.19,roi:69,map:true},
  {rank:689,brand:'Jack Links',name:'Jack Links Beef Jerky Original 9 oz',category:'GROCERY',sell:23.99,cost:10.0,profit:6.89,roi:69,map:true},
  {rank:690,brand:'Jack Links',name:'Jack Links Beef Jerky Sweet and Hot 9 oz',category:'GROCERY',sell:23.99,cost:10.0,profit:6.89,roi:69,map:true},
  {rank:691,brand:'RXBAR',name:'RXBAR Protein Bar Chocolate Sea Salt 12ct',category:'GROCERY',sell:38.99,cost:18.0,profit:11.64,roi:65,map:true},
  {rank:692,brand:'ONE Bar',name:'ONE Protein Bar Birthday Cake 12ct',category:'GROCERY',sell:38.99,cost:18.0,profit:11.64,roi:65,map:true},
  {rank:693,brand:'Tillamook',name:'Tillamook Country Smoker Real Hardwood Smoked Beef Sticks 1 oz 24ct',category:'GROCERY',sell:38.99,cost:18.0,profit:11.64,roi:65,map:true},
  {rank:694,brand:'Green Mountain',name:'Green Mountain Coffee Roasters Breakfast Blend K-Cup Pods 48ct',category:'GROCERY',sell:42.99,cost:20.0,profit:13.04,roi:65,map:true},
  {rank:695,brand:'Honey Stinger',name:'Honey Stinger Organic Energy Chews Strawberry 12ct',category:'GROCERY',sell:42.99,cost:20.0,profit:13.04,roi:65,map:true},
  {rank:696,brand:'Larabar',name:'Larabar Gluten Free Bar Peanut Butter Chocolate Chip 16ct',category:'GROCERY',sell:34.99,cost:16.0,profit:10.24,roi:64,map:true},
  {rank:697,brand:'Justin\'s',name:'Justins Classic Almond Butter Squeeze Pack 1.15 oz 10ct',category:'GROCERY',sell:26.99,cost:12.0,profit:7.44,roi:62,map:true},
  {rank:698,brand:'Clif Bar',name:'Clif Bar Energy Bar Chocolate Chip 12ct',category:'GROCERY',sell:26.99,cost:12.0,profit:7.44,roi:62,map:true},
  {rank:699,brand:'Built Bar',name:'Built Bar Protein Bar Cocoa Brownie 18ct',category:'GROCERY',sell:49.99,cost:24.0,profit:14.99,roi:62,map:true},
  {rank:700,brand:'Peet\'s',name:'Peets Coffee Vanilla Caramel K-Cup 22ct',category:'GROCERY',sell:26.99,cost:12.0,profit:7.44,roi:62,map:true},
  {rank:701,brand:'Harney Sons',name:'Harney and Sons Fine Teas Hot Cinnamon Spice Tea Tin',category:'GROCERY',sell:26.99,cost:12.0,profit:7.44,roi:62,map:true},
  {rank:702,brand:'Justin\'s',name:'Justins Classic Peanut Butter Squeeze Pack 1.15 oz 10ct',category:'GROCERY',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:703,brand:'Oberto',name:'Oberto All Natural Beef Jerky Original 9 oz',category:'GROCERY',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:704,brand:'Bigelow',name:'Bigelow Constant Comment Tea Bags 160ct',category:'GROCERY',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:705,brand:'Pocky',name:'Pocky Chocolate Cream Covered Biscuit Sticks 10ct',category:'GROCERY',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:706,brand:'Anthony\'s',name:'Anthonys Organic Inulin Powder 1 lb',category:'GROCERY',sell:22.99,cost:10.0,profit:6.04,roi:60,map:true},
  {rank:707,brand:'Quest',name:'Quest Protein Bar Chocolate Chip Cookie Dough 12ct',category:'GROCERY',sell:44.99,cost:22.0,profit:12.74,roi:58,map:true},
  {rank:708,brand:'Chomps',name:'Chomps Grass Fed Beef Original Sea Salt Meat Sticks 24ct',category:'GROCERY',sell:44.99,cost:22.0,profit:12.74,roi:58,map:true},
  {rank:709,brand:'Kind',name:'Kind Bars Dark Chocolate Nuts Sea Salt 12ct',category:'GROCERY',sell:29.99,cost:14.0,profit:7.99,roi:57,map:true},
  {rank:710,brand:'Starbucks',name:'Starbucks Ground Coffee Dark Roast Espresso Roast 28 oz',category:'GROCERY',sell:29.99,cost:14.0,profit:7.99,roi:57,map:true},
  {rank:711,brand:'Starbucks',name:'Starbucks Ground Coffee Medium Roast Pike Place 28 oz',category:'GROCERY',sell:29.99,cost:14.0,profit:7.99,roi:57,map:true},
  {rank:712,brand:'Bob\'s Red Mill',name:'Bobs Red Mill Gluten Free 1 to 1 Baking Flour 5 lb',category:'GROCERY',sell:29.99,cost:14.0,profit:7.99,roi:57,map:true},
  {rank:713,brand:'Folgers',name:'Folgers Classic Roast Medium Roast Ground Coffee 48 oz',category:'GROCERY',sell:25.99,cost:12.0,profit:6.59,roi:55,map:true},
  {rank:714,brand:'Old Wisconsin',name:'Old Wisconsin Turkey Sausage Snack Sticks 28 oz',category:'GROCERY',sell:32.99,cost:16.0,profit:8.54,roi:53,map:true},
  {rank:715,brand:'Lotus Biscoff',name:'Lotus Biscoff Cookie 8.8 oz 2 Pack',category:'GROCERY',sell:21.99,cost:10.0,profit:5.19,roi:52,map:true},
  {rank:716,brand:'Kind',name:'Kind Breakfast Bars Honey Oat 6ct',category:'GROCERY',sell:17.99,cost:8.0,profit:3.79,roi:47,map:true},
  {rank:717,brand:'Twinings',name:'Twinings English Breakfast Black Tea 50 Bags',category:'GROCERY',sell:15.99,cost:7.0,profit:3.09,roi:44,map:true},
  {rank:718,brand:'Celestial Seasonings',name:'Celestial Seasonings Sleepytime Herbal Tea 40 Bags',category:'GROCERY',sell:13.99,cost:6.0,profit:2.39,roi:40,map:true},
  {rank:719,brand:'Bob\'s Red Mill',name:'Bobs Red Mill Organic Rolled Oats Old Fashioned 32 oz',category:'GROCERY',sell:13.99,cost:6.0,profit:2.39,roi:40,map:true},
  {rank:720,brand:'Organic India',name:'Organic India Tulsi Green Tea 18 Bags',category:'GROCERY',sell:13.99,cost:6.0,profit:2.39,roi:40,map:true},
  {rank:721,brand:'Ancient Harvest',name:'Ancient Harvest Organic Quinoa 12 oz',category:'GROCERY',sell:13.99,cost:6.0,profit:2.39,roi:40,map:true},
  {rank:722,brand:'365 Organic',name:'365 Organic Coconut Aminos 10 oz',category:'GROCERY',sell:12.99,cost:5.5,profit:2.04,roi:37,map:true},
  {rank:723,brand:'Tazo',name:'Tazo Organic Chai Black Tea Bags 20ct',category:'GROCERY',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:724,brand:'Simple Mills',name:'Simple Mills Almond Flour Crackers Sea Salt 4.25 oz',category:'GROCERY',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:725,brand:'Simple Mills',name:'Simple Mills Almond Flour Baking Mix Banana Muffin',category:'GROCERY',sell:11.99,cost:5.0,profit:1.69,roi:34,map:true},
  {rank:726,brand:'Organicgirl',name:'Organic Girl 100% Organic Baby Arugula 5 oz',category:'GROCERY',sell:10.99,cost:4.5,profit:1.34,roi:30,map:false}
]

const ALL_CATS = [
  'ALL','FRAGRANCE','DOG','CAT','BIRD','REPTILE','AQUATICS',
  'SMALL ANIMAL','PET SUPPLIES','HOME & KITCHEN','HEALTH & WELLNESS',
  'SPORTS & OUTDOORS','GROCERY'
]
const CAT_LABELS: Record<string, string> = {
  'ALL': 'All Products',
  'FRAGRANCE': 'Fragrance',
  'DOG': 'Dog',
  'CAT': 'Cat',
  'BIRD': 'Bird',
  'REPTILE': 'Reptile',
  'AQUATICS': 'Aquatics',
  'SMALL ANIMAL': 'Small Animal',
  'PET SUPPLIES': 'Pet Supplies',
  'HOME & KITCHEN': 'Home & Kitchen',
  'HEALTH & WELLNESS': 'Health & Wellness',
  'SPORTS & OUTDOORS': 'Sports & Outdoors',
  'GROCERY': 'Grocery',
}
const PAGE_SIZE = 48

export default function CatalogPage() {
  const [cat, setCat] = useState('ALL')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<'rank' | 'roi' | 'profit' | 'sell'>('rank')

  const filtered = useMemo(() => {
    let res = PRODUCTS
    if (cat !== 'ALL') res = res.filter(p => p.category === cat)
    if (search.trim()) {
      const q = search.toLowerCase()
      res = res.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    }
    const s = sortBy
    return [...res].sort((a, b) => s === 'rank' ? a.rank - b.rank : b[s] - a[s])
  }, [cat, search, sortBy])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 1.5rem' }
  const handleCat = (c: string) => { setCat(c); setPage(1) }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1) }
  const catCount = (c: string) => c === 'ALL' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c).length

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Urban Pulse Wholesale Product Catalog',
    description: 'Wholesale products available from Urban Pulse Wholesale LLC — authorized Amazon FBA distributor',
    numberOfItems: PRODUCTS.length,
    url: 'https://www.urbanpulsewholesale.com/catalog',
  }

  return (
    <div style={{ background: C.cream }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section style={{ background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${C.beige}` }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.25rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Wholesale Product Catalog</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.dark, marginBottom: '0.75rem', lineHeight: 1.05 }}>Browse Our Wholesale Catalog</h1>
          <p style={{ color: C.sub, fontSize: '1rem', maxWidth: 640, lineHeight: 1.8, fontFamily: 'Plus Jakarta Sans, sans-serif', marginBottom: '2rem' }}>
            Real wholesale products sourced from authorized distributors across multiple categories — BCI pet supplies, UnitedPerfumes fragrance lines, home & kitchen, health & wellness, sports & outdoors, and grocery. All pricing reflects estimated Amazon FBA sell price and profitability.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: '726+', sub: 'Products' },
              { label: '262+', sub: 'Brands' },
              { label: '12', sub: 'Categories' },
              { label: '99%', sub: 'Avg ROI' },
              { label: '$33.85', sub: 'Avg Profit' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '1.75rem', color: C.dark, lineHeight: 1 }}>{s.label}</div>
                <div style={{ color: C.muted, fontSize: '0.72rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ── */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.beige}`, position: 'sticky', top: 72, zIndex: 10, boxShadow: '0 2px 12px rgba(28,28,26,0.06)' }}>
        <div style={{ ...wrap, padding: '0.75rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            value={search} onChange={handleSearch}
            placeholder="Search products, brands..."
            style={{ flex: '1 1 200px', minWidth: 150, padding: '0.5rem 1rem', borderRadius: 100, border: `1.5px solid ${C.beige}`, background: C.cream, fontSize: '0.85rem', fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.dark, outline: 'none' }}
          />
          <select value={sortBy} onChange={e => setSortBy(e.target.value as any)}
            style={{ padding: '0.5rem 1rem', borderRadius: 100, border: `1px solid ${C.beige}`, background: C.cream, fontSize: '0.82rem', fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.dark, cursor: 'pointer' }}>
            <option value="rank">Default Order</option>
            <option value="roi">Highest ROI</option>
            <option value="profit">Highest Profit</option>
            <option value="sell">Highest Price</option>
          </select>
          <span style={{ color: C.muted, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif', whiteSpace: 'nowrap' }}>{filtered.length} results</span>
        </div>
        <div style={{ ...wrap, padding: '0 1.5rem 0.75rem', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => handleCat(c)} style={{
              padding: '0.35rem 0.875rem', borderRadius: 100,
              fontSize: '0.76rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600,
              border: cat === c ? `1.5px solid ${C.rust}` : `1px solid ${C.beige}`,
              background: cat === c ? C.rust : C.cream,
              color: cat === c ? C.white : C.sub,
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
              {CAT_LABELS[c]} <span style={{ opacity: 0.6 }}>({catCount(c)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div style={wrap}>
          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: C.muted, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              No products found. Try adjusting your search or category filter.
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.875rem' }}>
            {visible.map(p => (
              <div key={`${p.rank}`} style={{
                background: C.white, borderRadius: 14, padding: '1.125rem',
                border: `1px solid ${C.beige}`,
                display: 'flex', flexDirection: 'column', gap: '0.35rem',
              }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <span style={{ color: C.muted, fontSize: '0.68rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>#{p.rank}</span>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {p.map && (
                      <span style={{ background: 'rgba(196,98,58,0.1)', color: C.rust, fontSize: '0.6rem', fontWeight: 700, padding: '2px 6px', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em' }}>MAP</span>
                    )}
                    <span style={{
                      background: CAT_BG[p.category] || 'rgba(107,100,96,0.1)',
                      color: CAT_COLORS[p.category] || C.sub,
                      fontSize: '0.6rem', fontWeight: 700, padding: '2px 7px',
                      borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}>{p.category}</span>
                  </div>
                </div>
                {/* Brand */}
                <div style={{ color: C.rust, fontSize: '0.68rem', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{p.brand}</div>
                {/* Name */}
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '0.875rem', color: C.dark, lineHeight: 1.35, flex: 1, minHeight: 48 }}>
                  {p.name.length > 65 ? p.name.slice(0, 65) + '…' : p.name}
                </div>
                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem', marginTop: 8 }}>
                  <div style={{ background: C.cream, borderRadius: 8, padding: '0.4rem 0.375rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '0.925rem', color: C.dark }}>${p.sell % 1 === 0 ? p.sell.toFixed(0) : p.sell.toFixed(0)}</div>
                    <div style={{ color: C.muted, fontSize: '0.58rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sell</div>
                  </div>
                  <div style={{ background: 'rgba(61,122,74,0.07)', borderRadius: 8, padding: '0.4rem 0.375rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '0.925rem', color: C.green }}>${p.profit.toFixed(0)}</div>
                    <div style={{ color: C.muted, fontSize: '0.58rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Profit</div>
                  </div>
                  <div style={{ background: 'rgba(196,98,58,0.07)', borderRadius: 8, padding: '0.4rem 0.375rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '0.925rem', color: C.rust }}>{p.roi}%</div>
                    <div style={{ color: C.muted, fontSize: '0.58rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                style={{ padding: '0.5rem 1.25rem', borderRadius: 100, border: `1px solid ${C.beige}`, background: C.white, color: page === 1 ? C.muted : C.dark, cursor: page === 1 ? 'default' : 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}>
                Prev
              </button>
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                const p0 = page <= 4 ? i + 1 : page >= totalPages - 3 ? totalPages - 6 + i : page - 3 + i
                if (p0 < 1 || p0 > totalPages) return null
                return (
                  <button key={p0} onClick={() => setPage(p0)} style={{
                    padding: '0.5rem 1rem', borderRadius: 100, cursor: 'pointer',
                    border: page === p0 ? `1.5px solid ${C.rust}` : `1px solid ${C.beige}`,
                    background: page === p0 ? C.rust : C.white,
                    color: page === p0 ? C.white : C.dark,
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem',
                    fontWeight: page === p0 ? 700 : 400,
                  }}>{p0}</button>
                )
              })}
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                style={{ padding: '0.5rem 1.25rem', borderRadius: 100, border: `1px solid ${C.beige}`, background: C.white, color: page === totalPages ? C.muted : C.dark, cursor: page === totalPages ? 'default' : 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}>
                Next
              </button>
              <span style={{ color: C.muted, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif', marginLeft: 8 }}>
                Page {page} of {totalPages}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section style={{ padding: '2rem 0', background: C.cream2, borderTop: `1px solid ${C.beige}` }}>
        <div style={{ ...wrap, textAlign: 'center' }}>
          <p style={{ color: C.muted, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.7, maxWidth: 700, margin: '0 auto' }}>
            <strong style={{ color: C.sub }}>Pricing Disclaimer:</strong> Sell prices, profit estimates, and ROI figures are based on wholesale cost data from authorized distributors and estimated Amazon FBA fees. Actual figures may vary based on current market conditions, FBA fee changes, and sell-through velocity. All data is for informational purposes only.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 0', background: C.rust, textAlign: 'center' }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.35)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: C.white, marginBottom: '0.875rem' }}>Interested in Supplying These Products?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>All products ship via Amazon FBA from authorized distributors. We maintain full MAP compliance across our entire catalog.</p>
          <Link href="/supplier-info" style={{ background: C.dark, color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
            Supplier Inquiry
          </Link>
        </div>
      </section>
    </div>
  )
}
