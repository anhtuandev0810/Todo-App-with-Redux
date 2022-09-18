### Notes:
Quản lý và cập nhật state.
Quản lý global state:
Truy xuất và cập nhật ở mọi nơi ---> giải quyết vấn đề truyền dữ liệu qua nhiều cấp.
Redux Toolkit chứa các packages để tránh việc cấu hình phức tạp

### Redux Core:
## State Management: 
Redux là một kho chứa state, có các quy tắc để có thể thay đổi state, khiến code có thể dự đoán được.
## Immutability (Bất biến): 
Luôn k thay đổi trực tiếp state trong redux, nên clone và thay đổi trên clone đấy.

## Redux construction:
# Reducers:
Là 1 pure fucntion với 2 tham số là state và action --> dùng để cập nhật lại state trong kho. 
state mới luôn dựa vào state cũ và k đc thay đổi state cũ (immutability).
K sử dụng bất đồng bộ trong function reducer. (k thể dự đoán state return cái gì)

# Actions: 
Là 1 object mô tả hành động mà chúng ta quy định.
Action creator: function tạo actions ---> func return action (tránh hard code)

# Dispatch:
Là 1 function: dispatch() nhận tham số là action sử dụng hoặc có thể là actionCreator function.
