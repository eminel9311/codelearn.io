GCPD (Greatest Common Prime Divisor) được định nghĩa là số nguyên tố lớn nhất là ước của các số nguyên dương cho trước. Nhiệm vụ của bạn là tìm GCPD của hai số nguyên a và b.

Ví dụ

Với a = 12 và b = 18, đầu ra là greatestCommonPrimeDivisor(a, b) = 3;
Với a = 12 và b = 13, đầu ra là greatestCommonPrimeDivisor(a, b) = -1.

Sàng nguyên tố Eratosthenes

- Tư tưởng của phương pháp trên là ta sẽ tìm mọi số nguyên tố có giá trị bé hơn hoặc bằng n. Từ đó có thể kết luật được số n có phải là một số nguyên tố hay không ?
- Thuật toán được miêu tả như sau: 
  1. Lập một danh sách các số liên tiếp từ 2 đến n
  2. Bước đầu tiên ta đặt số a = 2
  3. Lần lượt đánh dấu các số a*a, a*(a+1), a*(a+2), ... có trong danh sách mình đã tạo trước.Nếu như a*a > n thì ta kết thúc thuật toán.
  4. Tìm số đầu tiên lớn hơn a chưa được đánh dấu trong danh sách. Nếu không tìm thấy thì kết thúc thuật toán, ngược lại thì gán a bằng số đó và lặp lại bước 3 