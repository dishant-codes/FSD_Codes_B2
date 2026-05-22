import java.util.ArrayList;

public class ArrayListImp{

    public static void main(String[] args) {
        

        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(20);
        list.add(50);
        list.add(30);

        System.out.println(list);

       for(int i: list){
        System.out.println(i);
       }




    }

}