- Chúng ta đánh dấu điểm mua và bán là left và right
- Khai báo lợi nhận cao nhất max_profit
- Lặp hết mảng, kiếm tra xem 
  + Nếu giá bán lớn hơn giá mua thì giá trị let profit = prices[right] - prices[left], max_profit = Math.max(profit, max_profit)
  + Nếu giá bán nhỏ hơn giá mua gán left = right
- Cứ mỗi bước lặp tăng right lên 1 đơn vị
- Trả về kết quả là max_profit
