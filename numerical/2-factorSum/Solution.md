Chúng ta có một số nguyên dương n. Mỗi một lần ta thay thế n bằng tổng các thừa số nguyên tố của nó (ví dụ 12=2*2*3 thì 12 sẽ được thay thế bằng số 2+2+3=7)

Chúng ta áp dụng phép toán này vào số hiện tại cho đến khi kết quả thu được giống vs số hiện tại

Cho một số tự nhiên, hãy tìm kết quả cuối cùng của phép toán trên.

Ví dụ:

Với n = 24, kết quả factorSum(n) = 5.
24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5.
Vì vậy kết quả trong trường hợp n = 24 là 5.


Phương pháp
- Khai báo biến sum để tính tổng các thừa số nguyên tố 
- Lặp i từ 2 đến n
  + B1: Nếu n hết cho i thì thì cộng i vào sum và gán n = n/i
  + B2: Nếu n không chia hết cho i thì tăng i lên 1 đơn vị và quay lại bước trên
  + B3: Đến cuối cùng trả ra kết quả là tổng của các thừa số nguyên tố
