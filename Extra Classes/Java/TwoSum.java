public class TwoSum {
    
    public static int[] twosum(int[] arr, int target){


        for(int i = 0; i < arr.length;i++){

            for(int j = 1; j < arr.length;j++){

                if(arr[i] + arr[j] == target){
                    return new int[]{i, j};
                }

            }

        }



        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        
        int[] arr = {3,5,8,2,7};
        int target = 10;
        
        for(int i:twosum(arr, target)){
            System.out.println(i);
        }

    }
}
