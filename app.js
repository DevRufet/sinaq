// // 1
// let num=Number(prompt("reqemi daxil edin:"))
// let num2=Math.floor(num/60)
// let num3=num%60
// console.log( `${num2} deqiqe ${num3} saniye`)
// // 2
// let num4=Number(prompt("reqemi daxil edin:"))
// let result=5/9*(num4-32)
// // 3
// let num4=Number(prompt("1-ci reqemi daxil edin:"))
// num5=Number(prompt("2-cireqemi daxil edin:"))
// num6=Number(prompt("3-cireqemi daxil edin:"))
// num7=Number(prompt("4-cireqemi daxil edin:"))
// num8=Number(prompt("5-cireqemi daxil edin:"))
// let result=(num4+num5+num6+num7+num8)/5
// 
// 4
// let num4=Number(prompt("ilinizi  daxil edin:"))
// let result=2024-num4
// console.log("result")
// 5
// let num4=Number(prompt("ilinizi  daxil edin:"))
// let num5=Number(prompt("ilinizi  daxil edin:"))
// let result=(num5*num4)/100
// 6
// let num4=Number(prompt("ilinizi  daxil edin:"))
// let num5=Number(prompt("ilinizi  daxil edin:"))
// let result=(num5*num4)/2
// 7
// let kredit=Number(prompt("kredit meblegini  daxil edin:"))
// let faiz=Number(prompt("faiz  daxil edin:"))
// Number(prompt("kredit meblegini  daxil edin:"))
// let result1=kredit+((kredit*faiz)/100)
// let result2=result1/ay
// console.log(`${result2} manat`)
// 8
// let ad=(prompt("ad daxil edin:"))
//  let soyad=(prompt("soyad  daxil edin:"))
// console.log(ad+soyad)
// 9
// let kvadrat=Number(prompt("kvadratin terefini daxil edin:"))
// let result1=4*kvadrat
// let result2=kvadrat**2
// console.log(`${result1} perimetr ${result2} sahe`)
// 10
//  let num1=Number(prompt("1-ci reqemi terefini daxil edin:"))
//  let num2=Number(prompt("2-ci reqemi terefini daxil edin:"))
// let result1=(num1+num2)**3
//  let result2=num1**3+num2**3
//  console.log(`${result1}`)
// Task1:
// Daxil yaşayır görən pensiya yaşına görə-çatmadığını tapan proqram yazın.
// Ədəd böyük və 125-dən balaca olmalıdır.
// let yas=Number(prompt("yasinzi daxil edin:"))
// if( yas>0 && yas<65
// ){
//     console.log("size pensiya dusmur")
// }
// else
//     {
//         console.log("size pensiya dusur")
//     }
// let num1=Number(prompt("birinci terefi daxil edin:"))
// let num2=Number(prompt("ikinci terefi daxil edin:"))
// let num3=Number(prompt("ucuncu terefi daxil edin:"))
// if(num1==num2==num3){
//     console.log("beraberyanli ucbucaq")
// }
// else if((num1**2+num2**2)==num3 || (num2**2+num3**2)==num1 || (num1**2+num3**2)==num2   ){
//     console.log("duzbucaqli ucbucaq")
// }
// else if(num1==num2 || num2==num3 || num1==num3){
//     console.log("beraberyanli ucbucaq")
// }
// else{
//     console.log("normal ucbucaq")

// }
// 3
// let num1=Number(prompt("reqemi daxil edin:"))
 
// if(num1>0 && num1%2==0){
//     console.log("cut")
// }
// else{
//     console.log("tek")   
// }
// 4
// let num1=Number(prompt("reqemi daxil edin:"))
// switch(num1) {
//     case 1:
//       console.log("yanvar")
//       break;
//     case 2:
//         console.log("fevral")
//       break;
//       case 3:
//         console.log("mart")
//       break;
//       case 4:
//         console.log("aprel")
//       break;
//       case 5:
//         console.log("may")
//       break;
//       case 6:
//         console.log("iyun")
//       break;
//       case 7:
//         console.log("iyul")
//       break;
//       case 8:
//         console.log("avqust")
//       break;
//       case 9:
//         console.log("sentyabr")
//       break;
//       case 10:
//         console.log("oktyabr")
//       break;
//       case 11:
//         console.log("noyabr")
//       break;
//       case 12:
//         console.log("dekabr")
//       break;
//     default:
//       console.log("zehmet olmazsa 1-12 arasi reqem daxil edin")
//   }
// 5
// let num1=Number(prompt("reqemi daxil edin:"))
// if((num1>0) && (num1%3==0) && (num1%5==0)){
//     console.log{"bolunur"};
// }
// 6
// let num1=Number(prompt("reqemi daxil edin:"))
// let result1=num1%2
// if( result1==0){
//     console.log("bolundu")
// }
// else{
//     console.log(result1)
// }
// 7
// let num1=Number(prompt("reqemi daxil edin:"))
// let num2=Number(prompt("reqemi daxil edin:"))
// if((num1*num2)>0){
//     console.log("musbertdir")
// }
// else{
//     console.log("menfidir")
// }
// 8
// let num1=Number(prompt("reqemi daxil edin:"))
// if(1<num1<100){
//     console.log("araliqdadir")
// }
// else{
//     console.log("araliqda deyil")
// }
// 9
// let num1=Number(prompt("1-reqemi daxil edin:"))
// let num2=Number(prompt("2-reqemi daxil edin:"))
// let num3=Number(prompt("3-reqemi daxil edin:"))
// if(num1>num2>num3 || num1>num2==num3 ||num1>num2<num3){
//     console.log(num1)
// }
// else if(num2>num1>num3 || num2>num1==num3 ||num2>num1<num3){
//     console.log(num2)
// }
// else{
//     console.log(num3)
// }
// 10
// let num1=Number(prompt("balinizi daxil edin:"))
// if(num1<=100 && 90<num1<100){
//     console.log("A")
// }
// else if(num1<=100 && 70<num1<80){
//     console.log("c")
// }
// else if(num1<=100 && 60<num1<70){
//     console.log("d")
// }
// else if(num1<=100 && 50<num1<60){
//     console.log("e")
// }
// else if(num1<=100 && 0<num1<50){
//     console.log("f")
// }
// else{
//     console.log("duzgun reqem daxil edin")
// // }
// // 11
// //  let num1=Number(prompt("yasiniz daxil edin:"))
// //  if(num1>0 && num1<18){
// //      console.log("yeniyetme")
// //  }
// // else if(num1>0 && 18<num1<64){
// //     console.log("yetkin")
// // }
// // else if(num1>0 && num1>65){
// //     console.log("yasli")
// // }
// // else{
// //     console.log("bu yas araligi duzgun deyil")
// // }
// // 12
// // let x=Number(prompt("1-ci daxil edin:"))
// // let y=Number(prompt("2-ci daxil edin:"))
// // if(x>0 && y<0){
// //     console.log(4*x+2*y+4)
// // }
// // else if(x>0 && y==0){
// //     console.log(2*x-y+3)
// // }
// // else if(x<0 && y>0){
// //     console.log(3*x+4*y+3)
// // }
// // 13
// // let x=Number(prompt("x-ci daxil edin:"))
// // let y=Number(prompt("y-ci daxil edin:"))
// // let emel=(prompt("y-ci daxil edin:"))
// // switch(emel){
// //     case "+":
// //         console.log(x+y)
// //     break;
// //     case "*":
// //         console.log(x*y)
// //     break;
// //     case "-":
// //         console.log(x-y)
// //     break;
// //     case "/":
// //         console.log(x/y)
// //     break;
// //     default:
// //         console.log("Dogru emel daxil edin")

// // }
// // 14
// let num=Number(prompt("reqemi daxil edin:"))
// let number=Math.floor(Math.random() * 100);
// console.log(num,number)
// let result1=Math.floor(num/10)
// let result2=num%10
// let result3=Math.floor(number/10)
// let result4=number%10
// console.log(result1,result2,result3,result4)
// if(num===number){
//     console.log("1000 manat")
// }
// else if(result1==result4 && result2==result3){
//     console.log("500 manat")
// }
// else if(result1==result3 || result2==result4){
//     console.log("100 manat")
// }
// else{
// //     console.log("bir daha sinayin")
    
// // }

// let hasil=1
// let i=0
// while(i<10){
//     i++
//     hasil*=i
// }
// console.log(hasil);
// do {
//     console.log("salam")
    
// } while (hasil<10);
//  let m=1000

// for (let i=10;i<1000;i++){
//     if(i%2===0 && i%7==0){
//         console.log(i)
//     }
// }
// const arr=["rufet","kesr","tohmet",1,3,6]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log(arr.length)
// console.log(arr[0])
// 1
// for(let i=0;i<5;i++){
//     console.log("Rufet")
// }
// 2
// for (let i=20;i>=0;i--){
//     console.log(i)
// }
// 3
// const arr=["Baki","gence","sumqayit"]
// for(let i=0;i<arr.length;i++){
//     co
// 4
// let sum=0
// const arr=[1,4,5,6,7,8,34,56,98]
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum);
// 6
// let daxil=Number(prompt("daxil edin:"))
// let sum=1
// for(let i=1;i<=daxil;i++){
//     sum*=i
// }
// console.log(sum);
// for(let i=0;i<100;i++){
//     if(i%3==0){
//         console.log(`${i} Fizz`);
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else if(i%3===0 && i%5===0){
//         console.log("Fizz Buzz");
//     }
// }
// let eded=Number(prompt("daxil edin:"))

// console.log(num1);
// console.log(num2);
// console.log(num3);
//  if(num1**3+num2**3+num3**3===eded){
//     console.log("armstronqdur");
//  }

// for(let i=99;i<1000;i++){
//     let sum=0
// let num1=Math.floor(i/100)
// // let num2=Math.floor(i/10%10)
// // // let num3=i%10
// // // let cem=num1**3 + num2**3 +num3**3
// // // sum+=cem
// // //   if(i==sum){
// // //     console.log(`${i} armstrongdur`)
// // //   }
// // // }




// // // let reqem=String(prompt("edei daxil edin:"))
// // // let sum=0
// // // for (let i=0;i<reqem.length;i++){
     
// // //      sum+=Number(reqem[i])
// // // }
// // // console.log(sum)



// function oddOrEven(arr){
//     let hasil=1
//     let sum=0
//      for(let i=0;i<arr.length;i++){
//         hasil*=arr[i]
//         sum+=arr[i]
//      }

//      if(hasil%2==0){
//         console.log(sum)
//      }else{
//         console.log(0)
//      }
// }

// const arr1=[1,2,3,4,5]
// const arr2=[6,7,8,9]
// console.log(arr1.concat(arr2));
const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let count=0
for(let i=0;i<sampleNews.length;i++){
      if(sampleNews[i]==" "){
        count+=1
      }

}
console.log(`${count} bosluq`);
let say=0
for(let i=0;i<sampleNews.length;i++){
    if(sampleNews[i]=="."){
        say+=1
    }
    
}
console.log(`${say} noqte`);
let olcu=0
for(let i=0;i<sampleNews.length;i++){
    if(sampleNews[i]==","){
        olcu+=1
    }
    
}
console.log(`${olcu} vergul`);