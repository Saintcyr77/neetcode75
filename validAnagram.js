function isAnagram(s, t) {
    if (s.length != t.length)
        return false;
    var charCountS = new Map();
    var charCountT = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        var count = charCountS.get(char) || 0;
        charCountS.set(char, count + 1);
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        var count = charCountT.get(char) || 0;
        charCountT.set(char, count + 1);
    }
    for (var _b = 0, charCountS_1 = charCountS; _b < charCountS_1.length; _b++) {
        var _c = charCountS_1[_b], char = _c[0], count = _c[1];
        if (charCountT.get(char) != count)
            return false;
    }
    return true;
}
;
isAnagram("rat", "car");
