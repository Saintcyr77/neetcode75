import Map from 
function isAnagram(s: string, t: string): boolean {
    
    if(s.length!=t.length) return false;
    
    let charCountS = new Map<string,number>();
    let charCountT = new Map<string,number>();
    
    for(let char of s){
        
        const count: number = charCountS.get(char)||0;
        
        charCountS.set(char,count+1);
    }
       for(let char of t){
        
        const count: number = charCountT.get(char)||0;
        
        charCountT.set(char,count+1);
    }
    
    for(let [char,count] of charCountS){
        
        if(charCountT.get(char)!=count) return false;
    }
    return true;
};

isAnagram("rat", "car");