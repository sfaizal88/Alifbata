/**
*
* headsup.js
* Act and find the word
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';
import * as Common from '../common';
import * as Constant from '../../shared/constant';

export const data = [
'Prophet Musa (as)', 'Prophet Muhammed (pbuh)', 'Prophet Yunus (as)', 'Prophet Yusuf (as)', 'Prophet Adam (as)',
'Prophet Isa (as)', 'Allah', 'Quran', 'Surah', 'Faith', 'Prayer', 'Zakath', 'Fasting', 'Haji', 'Angel Jibril',
'Angel Azrael', 'Angel Israfil', 'Angel Malik', 'Khaba', 'Mecca', 'Al-Aqsa', 'Dajjal', 'Heaven',
'Hell', 'Honey', 'Fig', 'Prayer Mat', 'Juz', 'Jinn', 'Angel', 'Human', 'Muslim', 'Peace', 'Allahu Akbar',
'Masha Allah', 'Injeel (Bible)', 'Light', 'Fire', 'Clay', 'Pilgrimage', 'Belief', 'Madinah', 'Imam', 'Mina',
'Adhaan', 'Salah', 'Suhoor', 'Valimah', 'Taraweeh', 'Al-Baqara', 'Camel', 'Giraffe', 'Sheep', 'Fatimah (as)',
'Maryam (as)', 'Khadijah (as)', 'Jerusalem', 'Iblees', 'Hafiz', 'Prophet Idris (as)',  'Prophet Nuh (as)',
'Prophet Hud (as)', 'Prophet Saleh (as)', 'Prophet Ibrahim (as)', 'Prophet Ismail (as)', 'Prophet Ishaq (as)',
'Prophet Lut (as)', 'Prophet Yaqub (as)', 'Prophet Shuaib (as)', 'Prophet Ayyub (as)', 'Prophet Harun (as)',
'Prophet Dawud (as)', 'Prophet Sulaiman (as)', 'Prophet Yahya (as)','Angel Mikail', 'Angel Munkar', 
'Angel Nakir', 'Angel Kiraman',  'Angel Katibin', 'Angel Ridwan', 'Melon', 'Vinegar', 'Olive oil', 'Mushroom',
'Grapes', 'Water', 'Pomegranate', 'Dates', 'Milk', 'Bismillah', 'Alhamdhulillah', 'Subhanallah', 'Astaghfirullah',
'Assalammu Alaikum', 'Walaikum Assalam', 'Fi Amanillah', 'Insha Allah', 'Siwak', 'Perfume', 'Friday Bayan', 'Surahs',
'Ayahs', 'Revelation', 'Prophets', 'Life', 'Death', 'Jannah', 'Jahannam', 'Angles', 'Devils', 'Iblees', 'Al-Kawthar',
'Yaseen', 'Zabur', 'Torah', 'Red sea', 'hands', 'Mouth', 'Face', 'Nose', 'elbows', 'head', 'ear', 'ankle', 'wudu',
'Alif', 'Shaytaan', 'Animal', 'Religion', 'follower', 'Zam Zam', 'Stop', 'hadith', 'pride', 'sorrow', 'Angel of Death',
'Umar ibn', 'Khadijah', 'Aisha', 'Fajr', 'Isha', 'Magrib', 'Luhar', 'Ashar', 'sneeze', 'liar', 'Qabil', 'Habil',
'Kitab', 'Martyrs', 'Abu Bakr RA', 'Bilal', 'Negus', 'Abyssinia', 'Adhan', 'Hijrah', 'graves', 'Abu Sufiyan', 'Hira cave',
'Badir', 'Al Haram', 'ablution', 'Muharram', 'Ramadan', 'Iftaar', 'Mashbooh', 'Halal', 'Haraam', 'Throne', 'The Mahdi',
'trumpet', 'Murder', 'Pork', 'Tawheed', 'Shirk', 'Hellfire', 'Zaqqoum', 'Hypocrites', 'Boiling Water', 'Shade', '33',
'Day of Judgment', 'Fish liver', 'Nil', 'Ajwa dates', 'Mount Uhud', 'Friday', 'Jummah', 'Charity', '2.5%', 'Shahadah',
'Niyyat', 'Salat', 'Mina', 'Al-Fatihah', 'Takbeer', 'Kalimah', 'Eid-al-Fitr', 'Laylat al-Qadr', 'Sunnah', 'Beauty',
'Mariam', 'Abu Talib', 'Abdul Muttalib', 'Staaf', 'Quraish', 'Arafat', 'Ship', 'Earthquake', 'Flood', 'Sound', 'Pharoah',
'The Nile', 'Wrestling', 'Horse Riding', 'Yam', 'Battle of Badr', 'Battle of Uhud', 'Shariah', 'carpenter', 'Surah Al Nasr',
'Ayatul Kursi', 'Elephant', 'Surah Yaseen', 'Hafiz', 'Imam', 'Sahabi', 'Ummah', 'Wahy', 'Masjid Quba'
];