function keywords(str){
    let lines = str.trim().split('\n');
    let obj = {};
    let keywords = '';
    for(let x=0;x<lines.length;x++){
        let words = lines[x].trim().split(" ");
        for(let i=0;i<words.length;i++){
            if(obj[words[i]]){
                obj[words[i]] = obj[words[i]] + 1
            }else{
                obj[words[i]] = 1
            }
        }
    }
    for(keys in obj){
        if(obj[keys] >= 3) {
            keywords += keys + " "
        }
    }
    console.log('Keywords are:',keywords);
}
keywords(`Ankita: Hello Kavya, How are you? It’s been a long time we have met.
Kavya: Oh Hi Ankita, I am doing good. What about you?
Ankita: I am fine too. So where are you working right now?
Kavya: I am working at the Bosch Company.
Ankita: Oh, really. That’s a great company. What is your post there?
Kavya: I am working as a Software Engineer.
Ankita: That’s really nice to hear.
Kavya: Thanks Ankita! So what are you up to nowadays?
Ankita: I am a travel blogger. I used to travel to different places and explore different cultures and varieties of food to write it in my blog. I would like to ask you also to follow my blog.
Kavya: Sure Ankita. I will certainly follow it. You are doing a great job by letting people know about different parts of the world.
Ankita: Thanks Kavya!
Kavya: Hey, why don’t you join me and my family for tomorrow’s lunch. They will also be happy to see you.
Ankita: Actually, that’s a great idea. I would love to meet them.
Kavya: So it’s decided. You will come to our place tomorrow at 1 PM. Will see you then.`)
