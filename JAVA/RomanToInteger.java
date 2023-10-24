import java.util.HashMap;

public class RomanToInteger {
    public int romInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        int n = s.length();
        int res = 0;
        for (int i = 0; i < n; i++) {
            if (i < n - 1 && map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {
                res += map.get(s.charAt(i + 1)) - map.get(s.charAt(i));
                i++;

            } else {
                res += map.get(s.charAt(i));
            }
        }
        // if (!Validation(s, map)) {
        //     System.out.println("The Roman Number " + s + " is invalid");
        //     return -1;
        // }
        return res;
    }

    // private boolean Validation(String s, HashMap<Character, Integer> map) {
    //     for (int i = 0; i < s.length() - 1; i++) {
    //         if (map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {
    //             if (i > 0 && map.get(s.charAt(i)) * 10 < map.get(s.charAt(i))) {
    //                 return false;
    //             }

    //         }
    //     }
    //     return true;

    // }

    public static void main(String[] args) {
        RomanToInteger ob = new RomanToInteger();
        String s = "LX";
        System.out.println("The Integer Number for this " + s + " Roman Number is : " + ob.romInt(s));
    }
}