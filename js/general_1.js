//各入力欄の要素
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var old = document.getElementById("old");
var active = document.getElementById("active");
var down = document.getElementById("down");
var stay = document.getElementById("stay");
var gender = document.getElementById("gender");
//結果出力要素
var kiso = document.getElementById("kiso");
var syouhikcal = document.getElementById("syouhikcal");
//各要素エラー判定
var errorheight = document.getElementById("errorheight");
var errorweight = document.getElementById("errorweight");
var errorold = document.getElementById("errorold");
//各要素エラー判定フラグ
var height_frg = false;
var weight_frg = false;
var old_frg = false;
 
height.addEventListener("blur", function() {
    heightCheck();
}, false);

weight.addEventListener("blur", function() {
    weightCheck();
}, false);

old.addEventListener("blur", function() {
    oldCheck();
}, false);



function heightCheck(){
    if(!(height.value==="")){
        errorheight.innerHTML = "";
        height_frg = true;    
    }else{
        errorheight.innerHTML = "『身長』に値を入力してください";
        height_frg = false;
    }
}

function weightCheck(){
    if(!(weight.value==="")){
        errorweight.innerHTML = "";
        weight_frg = true;
    }else{
        errorweight.innerHTML = "『体重』に値を入力してください";
        weight_frg = false;
    }
}

function oldCheck(){
    if(!(old.value==="")){
        errorold.innerHTML = "";
        old_frg = true;
    }else{
        errorold.innerHTML = "『年齢』に値を入力してください";
        old_frg = false;
    }
}

function activeCheck(){
    if(!(old.value==="")){
        erroractive.innerHTML = "";
        active_frg = true;
    }else{
        erroractive.innerHTML = "『アクティブ度』に値を入力してください";
        active_frg = false;
    }
}

//ボタン押したときの処理
function rslt(){
   if(!(height_frg && weight_frg && old_frg)){
      kiso.innerHTML = "全ての項目に正しい値を入力してください";
   }else{
    getWeekold(); 
   }
}

//結果出力
function getWeekold(){
    var fat = 0;
    if(active.value === 'takai'){
        fat = 1.725;
    }else if(active.value === 'maamaa'){
        fat = 1.55;
    }else{
        fat = 1.2;
    }

    var fat2 = 0;
    if(mokuteki.value === 'down'){
        fat2 = 0.8;
    }else if(mokuteki.value === 'stay'){
        fat2 = 1;
    }else{
        fat2 = 1.2;
    }

    console.log(10 * weight.value);
    console.log(6.25 * height.value);
    console.log(5 * old.value + 5);
    let kisotaisya
    if(gender.value === 'male'){
        kisotaisya = Math.floor((10 * weight.value) + (6.25 * height.value) - (5 * old.value) +5);
    }else{
        kisotaisya = Math.floor((10 * weight.value) + (6.25 * height.value) - (5 * old.value) - 161); 
    }
    let daykcal = Math.floor(kisotaisya * fat);
    let daykcal2 = Math.floor(daykcal * fat2); 
    let tanpaku = Math.floor(weight.value * 2);
    let tanpakukcal = Math.floor(tanpaku * 4);
    let sisitukcal = Math.floor(daykcal2 * 0.25);
    let sisitu = Math.floor(sisitukcal / 9);
    let tansuikcal = Math.floor(daykcal2 - (tanpakukcal + sisitukcal));
    let tansui = Math.floor(tansuikcal / 4);

    kiso.innerHTML = "基礎代謝："+kisotaisya+"kcal";
    syouhikcal.innerHTML = "一日の消費カロリー："+daykcal+"kcal";
    mokutekikcal.innerHTML = "一日に摂取すべきカロリー："+daykcal2+"kcal";  
    P_protein.innerHTML = "タンパク質："+tanpaku+"g "+tanpakukcal+"kcal";
    F_fat.innerHTML = "脂質："+sisitu+"g "+sisitukcal+"kcal";
    C_calbon.innerHTML = "炭水化物："+tansui+"g "+tansuikcal+"kcal";


}
