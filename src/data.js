export const API_KEY='AIzaSyDXrJcajzSi-trqRQd6Wsc1Fj5vOBID90w';

export const viewsConverter=(views)=>{
    if(views>=1000000){
        return Math.floor(views/1000000) + 'M';
    }else if(views>=1000){
        return Math.floor(views/1000) + 'K';
    }else{
        return views;
    }
}