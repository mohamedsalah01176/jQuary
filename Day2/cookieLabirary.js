(function(global){
    let cookieobj={
        set:function setCookie(cookieName,cookieValue,expiryDate){
            if(arguments.length ==2 || arguments.length ==3){
                if(typeof cookieName === "string" ){
                    let nowDate=new Date();
                    nowDate.setMonth(nowDate.getMonth() +expiryDate)
                    if(expiryDate){
                        document.cookie=`${cookieName}=${cookieValue};expires=${nowDate}`
                    }else{
                        document.cookie=`${cookieName}=${cookieValue}`
                    }
                }else{
                    throw "cookieName must be string or check cookValue";
                }
            }else{
                throw "please enter only two or three parameters";
            }
        },
    get:function getCookies(cookieName){
        if(arguments.length==1){
            if(typeof cookieName === "string"){
                let arrCookies=document.cookie.split(";");
                for(let i=0;i<arrCookies.length;i++){
                    let values=arrCookies[i].split("=")[0];
                    if(values.trim() === cookieName){
                        return arrCookies[i].split("=")[1];
                    }
                }
            }else{
                throw "you must use input string";
            }
        }else{
            throw "please enter only one parameter";
        }
    },
    deleteCookie:function deleteCookie(cookieName){
        if(arguments.length==1){
            if(typeof cookieName === "string"){
                document.cookie=`${cookieName}= ;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
            }else{
                throw "you must use input string";
            }
        }else{
            throw "please enter only one parameter";
        }
    
    },
    ListCookie:function hasCookie(cookieName){
        if(arguments.length==1){
            if(typeof cookieName === "string"){
                if(getCookies(cookieName)){
                    return true;
                }else{
                    return false;
                }
            }else{
                throw "you must use input string";
            }
        }else{
            throw "please enter only one parameter";
        }
    },
    noConfilict:function(){
        global.$c=cookieobj;
        return cookieobj;
    }
} 
global.$c=cookieobj;
return cookieobj;
})(this)