let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Al-Fatihah",
     path: "Coran/Surah Al-Fatihah (The Opener) Salman Al-Utaybi Quran Recitation.mp3",
     img: "image/imageonline-co-brightnessadjusted.jpg",
     singer: "Salman Al Utaybi"
   },
   {
	name: "An-Nas",
	path: "Coran/Surah An-Nas (The Mankind) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Falaq",
	path: "Coran/Surah Al-Falaq (The Daybreak) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Ikhlas",
	path: "Coran/Surah Al-Ikhlas (The Sincerity) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Masad",
	path: "Coran/Surah Al-Masad (The Palm Fiber) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "An-Nasr",
	path: "Coran/Surah An-Nasr (The Divine Support) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Kafirun",
	path: "Coran/Surah Al-Kafirun (The Disbelievers) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Kawtar",
	path: "Coran/Surah Al-Kawthar (The Abundance) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Ma'un",
	path: "Coran/Surah Al-Ma'un (The Small Kindness) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Quraysh",
	path: "Coran/Surah Quraysh (Quraysh) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Fil",
	path: "Coran/Surah Al-Fil (The Elephant) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Humazah",
	path: "Coran\Surah Al-Humazah (The Traducer) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-'Asr",
	path: "Coran/Surah Al-'Asr (The Declining Day) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Takathur",
	path: "Coran/Surah At-Takathur (The Rivalry in World Increase) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Qari'ah",
	path: "Coran/Surah Al-Qari'ah (The Calamity) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-'Adiyat",
	path: "Coran/Surah Al-'Adiyat (The Courser) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Zalzalah",
	path: "Coran/Surah Al-Zalzalah (The Earthquake) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Bayyinah",
	path: "Coran/Surah Al-Bayyinah (The Clear Proof) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Qadr",
	path: "Coran/Surah Al-Qadr (The Power) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-'Alaq",
	path: "Coran/Surah Al-'Alaq (The Clot) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Tin",
	path: "Coran/Surah At-Tin (The Fig) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Ad-Duha",
	path: "Coran/Surah Ad-Duha (The Morning Hours) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Lail",
	path: "Coran/Surah Al-Lail (The Night) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Ash-Shams",
	path: "Coran/Surah Ash-Shams (The Sun) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Balad",
	path: "Coran/Surah Al-Balad (The City) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Fajr",
	path: "Coran/Surah Al-Fajr (The Dawn) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Ghashiyah",
	path: "Coran/Surah Al-Ghashiyah (The Overwhelming) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-A'la",
	path: "Coran/Surah Al-A'la (The Most High) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Tariq",
	path: "Coran/Surah At-Tariq (The Nightcomer) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Buruj",
	path: "Coran/Surah Al-Buruj (The Mansions of the Stars) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Inshiqaq",
	path: "Coran/Surah Al-Inshiqaq (The Sundering) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Mutaffifin",
	path: "Coran/Surah At-Mutaffifin (The Defrauding) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Infitar",
	path: "Coran/Surah Al-Infitar (The Cleaving) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Takwir",
	path: "Coran/Surah At-Takwir (The Overthrowing) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "'Abasa",
	path: "Coran/Surah 'Abasa (He Frowned) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "An-Nazi'at",
	path: "Coran/Surah An-Nazi'at (Those Who Drag Forth) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "An-Naba'",
	path: "Coran/Surah An-Naba' (The Tidings) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Mursalat",
	path: "Coran/Surah Al-Mursalat (Those Emissaries) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Insan",
	path: "Coran/Surah Al-Insan (The Man)  Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Qiyamah",
	path: "Coran/Surah Al-Qiyamah (The Resurrection) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Muddaththir",
	path: "Coran/Surah Al-Muddaththir (The Cloaked One) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Muzzammil",
	path: "Coran/Surah Al-Muzzammil (The Enshrouded One) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Jinn",
	path: "Coran/Surah Al-Jinn (The Jinn) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Nuh",
	path: "Coran/Surah Nuh (Noah) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Ma'arij",
	path: "Coran/Surah Al-Ma'arij (The Ascending Stairways) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Haqqah",
	path: "Coran/Surah Al-Haqqah (The Reality) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Qalam",
	path: "Coran/Surah Al-Qalam (The Pen) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Mulk",
	path: "Coran\Surah Al-Mulk (The Sovereignty) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Tahrim",
	path: "Coran/Surah At-Tahrim (The Prohibition) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "At-Taghabun",
	path: "Coran/Surah At-Taghabun (The Mutual Disillusion) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Munafiqun",
	path: "Coran/Surah Al-Munafiqun (The Hypocrites) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Jumu'ah",
	path: "Coran/Surah Al-Jumu'ah (The Congregation, Friday) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "As-Saf",
	path: "Coran/Surah As-Saf (The Ranks) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Hashr",
	path: "Coran/Surah Al-Hashr (The Exile) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Mujadilah",
	path: "Coran/Surah Al-Mujadilah (The Pleading Woman) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Al-Waqi'ah",
	path: "Coran/Surah Al-Waqi'ah (The Inevitable) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  },
  {
	name: "Ya-Sin",
	path: "Coran/Surah Ya-Sin (Ya Sin) Salman Al-Utaybi Quran Recitation.mp3",
	img: "image/imageonline-co-brightnessadjusted.jpg",
	singer: "Salman Al Utaybi"
  }
  
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }