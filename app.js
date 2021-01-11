if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('SW Reigestered. \n\n', reg))
        .catch(err => console.log('SW Registration Failed. \n\n', err));
}

function shlonek() {
    const audio = new Audio('./audio-examples/shlonek.wav');
    audio.play();
}

function shlonech() {
    const audio = new Audio('./audio-examples/shlonich.wav');
    audio.play();
}

function sb() {
    const audio = new Audio('./audio-examples/sabahelkhair.wav');
    audio.play();
}

function ms() {
    const audio = new Audio('./audio-examples/masaaelkhair.wav');
    audio.play();
}

function tb() {
    const audio = new Audio('./audio-examples/tisbahalakhair.wav');
    audio.play();
}

function tbn() {
    const audio = new Audio('./audio-examples/tisbaheenalakhair.wav');
    audio.play();
}

function tbon() {
    const audio = new Audio('./audio-examples/tisbahoonalakhair.wav');
    audio.play();
}

function s() {
    const audio = new Audio('./audio-examples/shukran.wav');
    audio.play();
}

function ak() {
    const audio = new Audio('./audio-examples/ashkurak.wav');
    audio.play();
}

function ach() {
    const audio = new Audio('./audio-examples/ashkurech.wav');
    audio.play();
}

function end() {
    const audio = new Audio('./audio-examples/endak.wav');
    audio.play();
}

function endch() {
    const audio = new Audio('./audio-examples/endich.wav');
    audio.play();
}

function sir() {
    const audio = new Audio('./audio-examples/hayshgadsiirha.wav');
    audio.play();
}

function besh() {
    const audio = new Audio('./audio-examples/hayibesh.wav');
    audio.play();
}

function umrak() {
    const audio = new Audio('./audio-examples/shgahumrak.wav');
    audio.play();
}

function umrech() {
    const audio = new Audio('./audio-examples/shgadumrech.wav');
    audio.play();
}

function mnen() {
    const audio = new Audio('./audio-examples/entamnen.wav');
    audio.play();
}

function mnench() {
    const audio = new Audio('./audio-examples/entimnen.wav');
    audio.play();
}


function alph1() {
    const audio = document.getElementById('alph1');
    audio.paused ? audio.play() : audio.pause();
}

function alph2() {
    const audio = document.getElementById('alph2');
    audio.paused ? audio.play() : audio.pause();
}

function shlonak() {
    const audio = new Audio('./audio-alphabet/shlonek.wav');
    audio.play();
}

function marhaba() {
    const audio = new Audio('./audio-alphabet/marhabaa.wav');
    audio.play();
}

function ahlan() {
    const audio = new Audio('./audio-alphabet/ahlan.wav');
    audio.play();
}

function allah() {
    const audio = new Audio('./audio-alphabet/allahakbar.wav');
    audio.play();
}

function sud() {
    const audio = new Audio('./audio-alphabet/sudug.wav');
    audio.play();
}

function huw() {
    const audio = new Audio('./audio-alphabet/huwaya.wav');
    audio.play();
}

function hath() {
    const audio = new Audio('./audio-alphabet/hatha.wav');
    audio.play();
}

function thak() {
    const audio = new Audio('./audio-alphabet/thak.wav');
    audio.play();
}

function shlonal() {
    const audio = new Audio('./audio-alphabet/shlonal.wav');
    audio.play();
}

function conv1() {
    const audio = new Audio('./audio-conversation/conv1.wav');
    audio.play();
}

function conv2() {
    const audio = new Audio('./audio-conversation/conv2.wav');
    audio.play();
}

function hello() {
    const audio = new Audio('./audio-conversation/hello.wav');
    audio.play();
}

function hala() {
    const audio = new Audio('./audio-conversation/3.12.wav');
    audio.play();
}

function alarasi() {
    const audio = new Audio('./audio-conversation/3.13.wav');
    audio.play();
}

function yislamrask() {
    const audio = new Audio('./audio-conversation/3.14.wav');
    audio.play();
}

function halabeek() {
    const audio = new Audio('./audio-conversation/3.21.wav');
    audio.play();
}

function thankgod() {
    const audio = new Audio('./audio-conversation/3.19.wav');
    audio.play();
}

function very() {
    const audio = new Audio('./audio-conversation/3.16.wav');
    audio.play();
}

function no() {
    const audio = new Audio('./audio-phrases/no.wav');
    audio.play();
}

function idk() {
    const audio = new Audio('./audio-phrases/idk.wav');
    audio.play();
}

function nounderstandu() {
    const audio = new Audio('./audio-phrases/nounderstand.wav');
    audio.play();
}

function hey() {
    const audio = new Audio('./audio-phrases/hey.wav');
    audio.play();
}

function sup() {
    const audio = new Audio('./audio-phrases/shakumaku.wav');
    audio.play();
}

function hello() {
    const audio = new Audio('./audio-phrases/hello.wav');
    audio.play();
}

function reshello() {
    const audio = new Audio('./audio-phrases/reshello.wav');
    audio.play();
}

function speakenglish() {
    const audio = new Audio('./audio-phrases/speakenglish.wav');
    audio.play();
}

function yes() {
    const audio = new Audio('./audio-phrases/yes.wav');
    audio.play();
}

function left() {
    const audio = new Audio('./audio-phrases/left.wav');
    audio.play();
}

function correct() {
    const audio = new Audio('./audio-phrases/correct.wav');
    audio.play();
}

function incorrect() {
    const audio = new Audio('./audio-phrases/incorrect.wav');
    audio.play();
}

function myarabicbad() {
    const audio = new Audio('./audio-phrases/myarabicbad.wav');
    audio.play();
}

function ok() {
    const audio = new Audio('./audio-phrases/ok.wav');
    audio.play();
}

function sry() {
    const audio = new Audio('./audio-phrases/sorry.wav');
    audio.play();
}

function srry() {
    const audio = new Audio('./audio-phrases/srry.wav');
    audio.play();
}

function idontwanna() {
    const audio = new Audio('./audio-phrases/idontwanna.wav');
    audio.play();
}

function right() {
    const audio = new Audio('./audio-phrases/right.wav');
    audio.play();
}

function maybe() {
    const audio = new Audio('./audio-phrases/maybe.wav');
    audio.play();
}

function bye() {
    const audio = new Audio('./audio-phrases/bye.wav');
    audio.play();
}

const testAlphabetForm = document.getElementById('form-test-alph');

testAlphabetForm.addEventListener('submit', e => {
    e.preventDefault();
    const qone = document.getElementById('q-one').value;
    const qtwo = document.getElementById('q-two').value;
    const qthree = document.getElementById('q-three').value;
    const qfour = document.getElementById('q-four').value;
    const qfive = document.getElementById('q-five').value;
    const qsix = document.getElementById('q-six').value;
    let score = 0;
    
    if (qone == 'shlonek' || qone == 'shlonak') {
        score++;
    } 
    if (qtwo == 'hala') {
        score++;
    }
    if (qthree == 'dal') {
        score++;
    }
    if (qfour == 'qal') {
        score++;
    }
    if (qfive == 'salam') {
        score++;
    }
    if (qsix == 'kan') {
        score++;
    }

    alert(`Result: ${score}/6`);
    document.getElementById('q-one').value = '';
    document.getElementById('q-two').value = '';
    document.getElementById('q-three').value = '';
    document.getElementById('q-four').value = '';
    document.getElementById('q-five').value = '';
    document.getElementById('q-six').value = '';
});

function imiraqi() {
    const audio = new Audio('./audio-phrases/57.wav');
    audio.play();
}

function imnotiraqi() {
    const audio = new Audio('./audio-phrases/58.wav');
    audio.play();
}

function imiraqif() {
    const audio = new Audio('./audio-phrases/59.wav');
    audio.play();
}

function imnotiraqif() {
    const audio = new Audio('./audio-phrases/510.wav');
    audio.play();
}

function he() {
    const audio = new Audio('./audio-phrases/511.wav');
    audio.play();
}

function she() {
    const audio = new Audio('./audio-phrases/53.wav');
    audio.play();
}

function i() {
    const audio = new Audio('./audio-phrases/5.wav');
    audio.play();
}

function you() {
    const audio = new Audio('./audio-phrases/51.wav');
    audio.play();
}

function youf() {
    const audio = new Audio('./audio-phrases/52.wav');
    audio.play();
}

function they() {
    const audio = new Audio('./audio-phrases/54.wav');
    audio.play();
}

function we() {
    const audio = new Audio('./audio-phrases/55.wav');
    audio.play();
}

function youp() {
    const audio = new Audio('./audio-phrases/56.wav');
    audio.play();
}

function zero() {
    const audio = new Audio('./audio-phrases/6.wav');
    audio.play();
}

function one() {
    const audio = new Audio('./audio-phrases/61.wav');
    audio.play();
}

function two() {
    const audio = new Audio('./audio-phrases/62.wav');
    audio.play();
}

function three() {
    const audio = new Audio('./audio-phrases/63.wav');
    audio.play();
}

function four() {
    const audio = new Audio('./audio-phrases/64.wav');
    audio.play();
}

function five() {
    const audio = new Audio('./audio-phrases/65.wav');
    audio.play();
}

function six() {
    const audio = new Audio('./audio-phrases/66.wav');
    audio.play();
}

function seven() {
    const audio = new Audio('./audio-phrases/67.wav');
    audio.play();
}

function eight() {
    const audio = new Audio('./audio-phrases/68.wav');
    audio.play();
}

function nine() {
    const audio = new Audio('./audio-phrases/69.wav');
    audio.play();
}

function ten() {
    const audio = new Audio('./audio-phrases/610.wav');
    audio.play();
}

function eleven() {
    const audio = new Audio('./audio-phrases/611.wav');
    audio.play();
}

function twelve() {
    const audio = new Audio('./audio-phrases/612.wav');
    audio.play();
}

function thirteen() {
    const audio = new Audio('./audio-phrases/613.wav');
    audio.play();
}

function fourteen() {
    const audio = new Audio('./audio-phrases/614.wav');
    audio.play();
}

function fifteen() {
    const audio = new Audio('./audio-phrases/615.wav');
    audio.play();
}

function sixteen() {
    const audio = new Audio('./audio-phrases/616.wav');
    audio.play();
}

function seventeen() {
    const audio = new Audio('./audio-phrases/617.wav');
    audio.play();
}

function eighteen() {
    const audio = new Audio('./audio-phrases/618.wav');
    audio.play();
}

function nineteen() {
    const audio = new Audio('./audio-phrases/619.wav');
    audio.play();
}

function twenty() {
    const audio = new Audio('./audio-phrases/620.wav');
    audio.play();
}

function twenty1() {
    const audio = new Audio('./audio-phrases/621.wav');
    audio.play();
}

function twentyand() {
    const audio = new Audio('./audio-phrases/622.wav');
    audio.play();
}

function twenty4() {
    const audio = new Audio('./audio-phrases/623.wav');
    audio.play();
}

function thirty() {
    const audio = new Audio('./audio-phrases/624.wav');
    audio.play();
}

function forty() {
    const audio = new Audio('./audio-phrases/650.wav');
    audio.play();
}

function fifty() {
    const audio = new Audio('./audio-phrases/626.wav');
    audio.play();
}

function sixty() {
    const audio = new Audio('./audio-phrases/627.wav');
    audio.play();
}

function seventy() {
    new Audio('./audio-phrases/628.wav').play();
}

function eighty() {
    new Audio('./audio-phrases/629.wav').play();
}

function ninety() {
    new Audio('./audio-phrases/630.wav').play();
}

function hundred() {
    new Audio('./audio-phrases/631.wav').play();
}

function thousand() {
    new Audio('./audio-phrases/632.wav').play();
}

function hundred1000() {
    new Audio('./audio-phrases/633.wav').play();
}

function plus() {
    new Audio('./audio-phrases/636.wav').play();
}

function minus() {
    new Audio('./audio-phrases/637.wav').play();
}

function times() {
    new Audio('./audio-phrases/638.wav').play();
}

function divided() {
    new Audio('./audio-phrases/639.wav').play();
}

function equals() {
    new Audio('./audio-phrases/640.wav').play();
}

function num() {
    new Audio('./audio-phrases/641.wav').play();
}

function nums() {
    new Audio('./audio-phrases/642.wav').play();
}

function rqm() {
    new Audio('./audio-phrases/643.wav').play();
}

function million() {
    new Audio('./audio-phrases/651.wav').play();
}

function billion() {
    new Audio('./audio-phrases/652.wav').play();
}

function fiftyfive() {
    new Audio('./audio-phrases/645.wav').play();
}

function fortyfive() {
    new Audio('./audio-phrases/646.wav').play();
}

function thirtytwo() {
    new Audio('./audio-phrases/647.wav').play();
}

function ninetyseven() {
    new Audio('./audio-phrases/648.wav').play();
}

function eightyeight() {
    new Audio('./audio-phrases/649.wav').play();
}

function toggleNav() {
    if (document.querySelector('.mobile-nav').style.width === "300px") {
        document.querySelector('.mobile-nav').style.width = "0px";
    } else {
        document.querySelector('.mobile-nav').style.width = "300px";
    }
}

function red() {
    new Audio('./audio-phrases/7/7-01.wav').play();
}

function green() {
    new Audio('./audio-phrases/7/7-02.wav').play();
}

function yellow() {
    new Audio('./audio-phrases/7/7-03.wav').play();
}

function blue() {
    new Audio('./audio-phrases/7/7-04.wav').play();
}

function white() {
    new Audio('./audio-phrases/7/7-05.wav').play();
}

function black() {
    new Audio('./audio-phrases/7/7-06.wav').play();
}

function gray() {
    new Audio('./audio-phrases/7/7-07.wav').play();
}

function orange() {
    new Audio('./audio-phrases/7/7-08.wav').play();
}

function pink() {
    new Audio('./audio-phrases/7/7-09.wav').play();
}

function purple() {
    new Audio('./audio-phrases/7/7-10.wav').play();
}

function brown() {
    new Audio('./audio-phrases/7/7-11.wav').play();
}

function gold() {
    new Audio('./audio-phrases/7/7-12.wav').play();
}

function lblue() {
    new Audio('./audio-phrases/7/7-13.wav').play();
}

function color() {
    new Audio('./audio-phrases/7/7-14.wav').play();
}

function colors() {
    new Audio('./audio-phrases/7/7-15.wav').play();
}

function dog() {
    new Audio('./audio-phrases/7/7-16.wav').play();
}

function cat() {
    new Audio('./audio-phrases/7/7-17.wav').play();
}

function lion() {
    new Audio('./audio-phrases/7/7-18.wav').play();
}

function tiger() {
    new Audio('./audio-phrases/7/7-19.wav').play();
}

function cow() {
    new Audio('./audio-phrases/7/7-20.wav').play();
}

function horse() {
    new Audio('./audio-phrases/7/7-21.wav').play();
}

function donkey() {
    new Audio('./audio-phrases/7/7-22.wav').play();
}

function elephant() {
    new Audio('./audio-phrases/7/7-23.wav').play();
}

function deer() {
    new Audio('./audio-phrases/7/7-24.wav').play();
}

function giraffe() {
    new Audio('./audio-phrases/7/7-25.wav').play();
}

function zebra() {
    new Audio('./audio-phrases/7/7-26.wav').play();
}

function bear() {
    new Audio('./audio-phrases/7/7-27.wav').play();
}

function pig() {
    new Audio('./audio-phrases/7/7-28.wav').play();
}

function panda() {
    new Audio('./audio-phrases/7/7-29.wav').play();
}

function chicken() {
    new Audio('./audio-phrases/7/7-30.wav').play();
}

function sheep() {
    new Audio('./audio-phrases/7/7-31.wav').play();
}

function goat() {
    new Audio('./audio-phrases/7/7-32.wav').play();
}

function buffalo() {
    new Audio('./audio-phrases/7/7-33.wav').play();
}

function chimp() {
    new Audio('./audio-phrases/7/7-34.wav').play();
}

function animal() {
    new Audio('./audio-phrases/7/7-35.wav').play();
}

function animals() {
    new Audio('./audio-phrases/7/7-36.wav').play();
}

function grandpa() {
    new Audio('./audio-phrases/7/7-37.wav').play();
}

function grandma() {
    new Audio('./audio-phrases/7/7-38.wav').play();
}

function dad() {
    new Audio('./audio-phrases/7/7-39.wav').play();
}

function mom() {
    new Audio('./audio-phrases/7/7-40.wav').play();
}

function sister() {
    new Audio('./audio-phrases/7/7-41.wav').play();
}

function brother() {
    new Audio('./audio-phrases/7/7-42.wav').play();
}

function cousin() {
    new Audio('./audio-phrases/7/7-43.wav').play();
}

function unclem() {
    new Audio('./audio-phrases/7/7-44.wav').play();
}

function uncled() {
    new Audio('./audio-phrases/7/7-45.wav').play();
}

function auntm() {
    new Audio('./audio-phrases/7/7-46.wav').play();
}

function auntd() {
    new Audio('./audio-phrases/7/7-47.wav').play();
}

function parents() {
    new Audio('./audio-phrases/7/7-48.wav').play();
}

function family() {
    new Audio('./audio-phrases/7/7-49.wav').play();
}

function north() {
    new Audio('./audio-phrases/7/7-50.wav').play();
}

function east() {
    new Audio('./audio-phrases/7/7-51.wav').play();
}

function west() {
    new Audio('./audio-phrases/7/7-52.wav').play();
}

function south() {
    new Audio('./audio-phrases/7/7-53.wav').play();
}

function ne() {
    new Audio('./audio-phrases/7/7-54.wav').play();
}

function nw() {
    new Audio('./audio-phrases/7/7-55.wav').play();
}

function se() {
    new Audio('./audio-phrases/7/7-56.wav').play();
}

function sw() {
    new Audio('./audio-phrases/7/7-57.wav').play();
}

function forwardl() {
    new Audio('./audio-phrases/7/7-58.wav').play();
}

function forwardg() {
    new Audio('./audio-phrases/7/7-59.wav').play();
}

function backward() {
    new Audio('./audio-phrases/7/7-60.wav').play();
}

function ta() {
    new Audio('./audio-phrases/7/7-61.wav').play();
}

function shlonaroh() {
    new Audio('./audio-phrases/7/7-62.wav').play();
}

function where() {
    new Audio('./audio-phrases/7/7-63.wav').play();
}

function how() {
    new Audio('./audio-phrases/7/7-64.wav').play();
}

function why() {
    new Audio('./audio-phrases/7/7-65.wav').play();
}

function cuz() {
    new Audio('./audio-phrases/7/7-66.wav').play();
}

function direction() {
    new Audio('./audio-phrases/7/7-67.wav').play();
}

function shop() {
    new Audio('./audio-phrases/7/7-68.wav').play();
}

function alwa() {
    new Audio('./audio-phrases/7/7-69.wav').play();
}

function sir() {
    new Audio('./audio-phrases/7/7-70.wav').play();
}

function besh() {
    new Audio('./audio-phrases/7/7-71.wav').play();
}

function expensive() {
    new Audio('./audio-phrases/7/7-72.wav').play();
}

function cheap() {
    new Audio('./audio-phrases/7/7-73.wav').play();
}

function lowerprice() {
    new Audio('./audio-phrases/7/7-74.wav').play();
}

function hotel() {
    new Audio('./audio-phrases/7/7-75.wav').play();
}

function room() {
    new Audio('./audio-phrases/7/7-76.wav').play();
}

function restaurant() {
    new Audio('./audio-phrases/7/7-77.wav').play();
}

function bookaroom() {
    new Audio('./audio-phrases/7/7-78.wav').play();
}

function howmanyppl() {
    new Audio('./audio-phrases/7/7-79.wav').play();
}

function oneperson() {
    new Audio('./audio-phrases/7/7-80.wav').play();
}

function twoppl() {
    new Audio('./audio-phrases/7/7-81.wav').play();
}

function threeppl() {
    new Audio('./audio-phrases/7/7-82.wav').play();
}

function howmuchnight() {
    new Audio('./audio-phrases/7/7-83.wav').play();
}

function canipaycc() {
    new Audio('./audio-phrases/7/7-84.wav').play();
}

function havebooking() {
    new Audio('./audio-phrases/7/7-85.wav').play();
}

function nameofwho() {
    new Audio('./audio-phrases/7/7-86.wav').play();
}

function givepassport() {
    new Audio('./audio-phrases/7/7-87.wav').play();
}

function givepassportm() {
    new Audio('./audio-phrases/7/7-88.wav').play();
}

function phonenum() {
    new Audio('./audio-phrases/7/7-89.wav').play();
}

function phonenumm() {
    new Audio('./audio-phrases/7/7-90.wav').play();
}

function wutdourec() {
    new Audio('./audio-phrases/7/7-91.wav').play();
}

function bill() {
    new Audio('./audio-phrases/7/7-92.wav').play();
}

function iwant() {
    new Audio('./audio-phrases/7/7-93.wav').play();
}

function lux() {
    new Audio('./audio-phrases/7/7-94.wav').play();
}

function menu() {
    new Audio('./audio-phrases/7/7-95.wav').play();
}

function wuttime() {
    new Audio('./audio-phrases/7/7-96.wav').play();
}

function svn() {
    new Audio('./audio-phrases/7/7-97.wav').play();
}

function am() {
    new Audio('./audio-phrases/7/7-98.wav').play();
}

function pm() {
    new Audio('./audio-phrases/7/7-99.wav').play();
}

function threethirty() {
    new Audio('./audio-phrases/7/7-100.wav').play();
}

function fourfifteen() {
    new Audio('./audio-phrases/7/7-101.wav').play();
}

function fiveam() {
    new Audio('./audio-phrases/7/7-102.wav').play();
}

function min() {
    new Audio('./audio-phrases/7/7-103.wav').play();
}

function hr() {
    new Audio('./audio-phrases/7/7-104.wav').play();
}

function sec() {
    new Audio('./audio-phrases/7/7-105.wav').play();
}

function day() {
    new Audio('./audio-phrases/7/7-106.wav').play();
}

function week() {
    new Audio('./audio-phrases/7/7-107.wav').play();
}

function month() {
    new Audio('./audio-phrases/7/7-108.wav').play();
}

function year() {
    new Audio('./audio-phrases/7/7-109.wav').play();
}

function decade() {
    new Audio('./audio-phrases/7/7-110.wav').play();
}

function century() {
    new Audio('./audio-phrases/7/7-111.wav').play();
}

function weeks() {
    new Audio('./audio-phrases/7/7-112.wav').play();
}

function months() {
    new Audio('./audio-phrases/7/7-113.wav').play();
}

function years() {
    new Audio('./audio-phrases/7/7-114.wav').play();
}

function decades() {
    new Audio('./audio-phrases/7/7-115.wav').play();
}

function centuries() {
    new Audio('./audio-phrases/7/7-116.wav').play();
}

function cold() {
    new Audio('./audio-phrases/7/7-117.wav').play();
}

function hot() {
    new Audio('./audio-phrases/7/7-118.wav').play();
}

function ice() {
    new Audio('./audio-phrases/7/7-119.wav').play();
}

function rain() {
    new Audio('./audio-phrases/7/7-120.wav').play();
}

function cloud() {
    new Audio('./audio-phrases/7/7-121.wav').play();
}

function ishot() {
    new Audio('./audio-phrases/7/7-122.wav').play();
}

function iscold() {
    new Audio('./audio-phrases/7/7-123.wav').play();
}

function israining() {
    new Audio('./audio-phrases/7/7-124.wav').play();
}

function issnowing() {
    new Audio('./audio-phrases/7/7-125.wav').play();
}

function temp() {
    new Audio('./audio-phrases/7/7-126.wav').play();
}

function weathertoday() {
    new Audio('./audio-phrases/7/7-127.wav').play();
}

function dolma() {
    new Audio('./audio-phrases/7/7-128.wav').play();
}

function biryani() {
    new Audio('./audio-phrases/7/7-129.wav').play();
}

function masgouf() {
    new Audio('./audio-phrases/7/7-130.wav').play();
}

function torshi() {
    new Audio('./audio-phrases/7/7-131.wav').play();
}

function rice() {
    new Audio('./audio-phrases/7/7-132.wav').play();
}

function meat() {
    new Audio('./audio-phrases/7/7-133.wav').play();
}

function chicken() {
    new Audio('./audio-phrases/7/7-134.wav').play();
}

function samoon() {
    new Audio('./audio-phrases/7/7-135.wav').play();
}

function xubz() {
    new Audio('./audio-phrases/7/7-136.wav').play();
}

function water() {
    new Audio('./audio-phrases/7/7-137.wav').play();
}

function wherego() {
    new Audio('./audio-phrases/7/7-138.wav').play();
}

function whereto() {
    new Audio('./audio-phrases/7/7-139.wav').play();
}

function iwantgo() {
    new Audio('./audio-phrases/7/7-140.wav').play();
}

function fare() {
    new Audio('./audio-phrases/7/7-141.wav').play();
}

function toomuch() {
    new Audio('./audio-phrases/7/7-142.wav').play();
}

function hurry() {
    new Audio('./audio-phrases/7/7-143.wav').play();
}