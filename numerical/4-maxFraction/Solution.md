Cho một danh sách các phân số, hãy tìm chỉ số của phân số lớn nhất (đếm từ 0)

Giả định rằng không có các phân số bằng nhau trong tập đầu vào

Ví dụ:

Với numerators = [5, 2, 5] và denominators = [6, 3, 4], thì kết quả maxFraction(numerators, denominators) = 2. 
5/4 là phân số lớn nhất, có chỉ số là 2.

Giải pháp.

- Để so sánh 2 phân số chúng ta sử dụng phương pháp quy đồng mẫu số

ví dụ: 5/6 và 2/3 chúng ta biến đổi thành a/b và c/d
quy đồng mẫu số 5 x 3 so sánh với 6 x 2 => a x d vs b x c
nếu 5 x 3 > 6 x 2 thì phần tử max được gán ở vị trí đầu tiên tức là 0
còn không thì chúng ta sẽ tiến lên 1 đơn vị