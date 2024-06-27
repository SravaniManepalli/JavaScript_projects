const draw=()=>{

    const mycanvas=document.getElementById("dicecanvas");

    const ctx=mycanvas.getContext("2d");
    diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber)
    if(diceNumber==6){
    ctx.beginPath()
    ctx.moveTo(200,200);
    ctx.strokeRect(200,200,100,100);
    ctx.stroke();
    ctx.moveTo(220,220);
    ctx.arc(230, 220, 5, 0, Math.PI * 2); 
    ctx.fill();
    ctx.arc(250,220, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.arc(270,220, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.moveTo(220,270);
    ctx.arc(230, 270, 5, 0, Math.PI * 2); 
    ctx.fill();
    ctx.arc(250,270, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.arc(270,270, 5, 0, Math.PI * 2);
    ctx.fill();
    }
    if(diceNumber==5){

    ctx.moveTo(200,200);
    ctx.strokeRect(200,200,100,100);
    ctx.stroke();
    ctx.moveTo(220,220);
    ctx.arc(230, 220, 5, 0, Math.PI * 2); 
    ctx.fill();
    ctx.arc(250,220, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.arc(270,220, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.moveTo(220,270);
    ctx.arc(230, 270, 5, 0, Math.PI * 2); 
    ctx.fill();
    ctx.moveTo(270,270);
    ctx.arc(270,270, 5, 0, Math.PI * 2);
    ctx.fill();
    }
    if(diceNumber==4){

        ctx.moveTo(200,200);
        ctx.strokeRect(200,200,100,100);
        ctx.stroke();
        ctx.moveTo(220,220);
        ctx.arc(230, 220, 5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.moveTo(270,220);
        ctx.arc(270,220, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.moveTo(220,270);
        ctx.arc(230, 270, 5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.moveTo(270,270);
        ctx.arc(270,270, 5, 0, Math.PI * 2);
        ctx.fill();
        }
    if(diceNumber==3){
        ctx.beginPath()
        ctx.moveTo(200,200);
        ctx.strokeRect(200,200,100,100);
        ctx.stroke();
        ctx.moveTo(220,250);
        ctx.arc(230, 250, 5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.arc(250,250, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.arc(270,250, 5, 0, Math.PI * 2);
        ctx.fill();

    }
    if(diceNumber==2){
        ctx.beginPath()
        ctx.moveTo(200,200);
        ctx.strokeRect(200,200,100,100);
        ctx.stroke();
        ctx.moveTo(220,250);
        ctx.arc(230, 250, 5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.moveTo(270,250);
        ctx.arc(270,250, 5, 0, Math.PI * 2);
        ctx.fill();

    }
    if(diceNumber==1){
        ctx.beginPath()
        ctx.moveTo(200,200);
        ctx.strokeRect(200,200,100,100);
        ctx.stroke();
        ctx.moveTo(250,250);
        
        ctx.arc(250,250, 5, 0, Math.PI * 2);
        ctx.fill();
        

    }
    }
    window.addEventListener("load",draw)
    window.addEventListener("keydown", (eventname) => {
        if (eventname.code === "Space") {
            location.reload(); 
        }
    });