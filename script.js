//call back hell
var count = 10;
document.getElementById('countdown').innerHTML ='T - '+ count;
function timer(count){
   count--;
   return count;
}

function countdown(){
    setTimeout(()=>{
        let cd = timer(count);
        document.getElementById('countdown').innerHTML = 'T - '+cd;
        setTimeout((cd)=>{
            cd = timer(cd);
            document.getElementById('countdown').innerHTML = 'T - '+cd;
            setTimeout((cd)=>{
                cd = timer(cd);
                document.getElementById('countdown').innerHTML = 'T - '+cd;
                setTimeout((cd)=>{
                    cd = timer(cd);
                    document.getElementById('countdown').innerHTML = 'T - '+cd;
                    setTimeout((cd)=>{
                        cd = timer(cd);
                        document.getElementById('countdown').innerHTML = 'T - '+cd;
                        setTimeout((cd)=>{
                            cd = timer(cd);
                            document.getElementById('countdown').innerHTML = 'T - '+cd;
                            setTimeout((cd)=>{
                                cd = timer(cd);
                                document.getElementById('countdown').innerHTML = 'T - '+cd;
                                setTimeout((cd)=>{
                                    cd = timer(cd);
                                    document.getElementById('countdown').innerHTML = 'T - '+cd;
                                    setTimeout((cd)=>{
                                        cd = timer(cd);
                                        document.getElementById('countdown').innerHTML = 'T - '+cd;
                                        setTimeout(()=>{
                                            if(cd == 1){
                                                document.getElementById('countdown').innerHTML = 'Happy Independence Day';
                                                document.getElementById('rocket').style.display = 'none';
                                                document.getElementById('countdown').style.fontSize = '32px';
                                                document.getElementById('countdown').style.fontWeight = '500';
                                            }
                                        },1000)
                                    },1000,cd)
                                },1000,cd)
                            },1000,cd)
                        },1000,cd)
                    },1000,cd)
                },1000,cd)
            },1000,cd)
        },1000,cd)
    },1000)

}
countdown();
