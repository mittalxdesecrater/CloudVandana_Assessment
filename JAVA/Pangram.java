import java.util.Scanner;

public class Pangram {
    public static boolean isPanagram(String s) {
        if (s.length() < 26) {
            return false;
        } else {
            for (char ch = 'a'; ch < 'z'; ch++) {
                if (s.indexOf(ch) < 0) {
                    return false;
                }

            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a String : ");
        String s = sc.nextLine();

        if (isPanagram(s.toLowerCase()) == false) {
            System.out.println("No, This String is not Panagram.");
        } else {
            System.out.println("Yes, This String is Panagram.");
        }
        sc.close();
    }

}

