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