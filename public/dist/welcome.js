System.register([], function (_export) {
  "use strict";

  var Welcome, MoneyToNumberValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.baseProducts = [{ id: 1, name: "Bánh tráng me", unit: "100gr/bịch", quantity: 1, price: 6000, weight: 100 }, { id: 2, name: "Bánh tráng muối", unit: "100gr/bịch", quantity: 1, price: 6000, weight: 100 }, { id: 3, name: "Bánh tráng trộn tắc", unit: "100gr/bịch", quantity: 1, price: 6000, weight: 100 }, { id: 4, name: "Bánh tráng sa tế tắc", unit: "100gr/bịch", quantity: 1, price: 6000, weight: 100 }, { id: 5, name: "Bánh tráng bơ dẻo tôm", unit: "120gr/bịch", quantity: 1, price: 10000, weight: 120 }, { id: 6, name: "Bánh tráng dẻo cay", unit: "350gr/xấp", quantity: 1, price: 25000, weight: 350 }, { id: 7, name: "Báng tráng dèo tôm", unit: "500gr/xấp", quantity: 1, price: 27000, weight: 500 }, { id: 8, name: "Bánh tráng dẻo me", unit: "35gr/xấp", quantity: 1, price: 25000, weight: 35 }, { id: 9, name: "Muối tôm loại 1", unit: "500gr", quantity: 1, price: 80000, weight: 500 }, { id: 10, name: "Muối chay loại 1", unit: "500gr", quantity: 1, price: 60000, weight: 500 }, { id: 11, name: "Bánh tráng làm bánh tráng me", unit: "500gr", quantity: 1, price: 33000, weight: 500 }, { id: 12, name: "Bánh tráng chuối", unit: "10 cái/xấp", quantity: 1, price: 15000, weight: 0 }, { id: 13, name: "Bánh tráng phơi sương mặn", unit: "9 cái/xấp", quantity: 1, price: 13000, weight: 0 }];
          this.products = [];
          this.product = {
            id: 0,
            name: "",
            unit: "",
            quantity: null,
            price: null,
            weight: null
          };
        }

        _createClass(Welcome, [{
          key: "productSelectChange",
          value: function productSelectChange(event) {
            var id = event.target.value;
            var selected = this.baseProducts.find(function (item) {
              return item.id == id;
            });
            if (selected) {
              this.product = JSON.parse(JSON.stringify(selected));
            }
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.products.push(this.product);
            this.clearProduct();
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(product) {
            this.products = this.products.filter(function (item) {
              return item.id != product.id;
            });
          }
        }, {
          key: "clearProduct",
          value: function clearProduct() {
            this.product = {
              id: 0,
              name: "",
              unit: "",
              quantity: null,
              price: null,
              weight: null
            };
          }
        }, {
          key: "totalPrice",
          get: function get() {
            return this.products.reduce(function (prev, curr) {
              return prev + curr.price * curr.quantity;
            }, 0);
          }
        }]);

        return Welcome;
      })();

      _export("Welcome", Welcome);

      MoneyToNumberValueConverter = (function () {
        function MoneyToNumberValueConverter() {
          _classCallCheck(this, MoneyToNumberValueConverter);
        }

        _createClass(MoneyToNumberValueConverter, [{
          key: "toView",
          value: function toView(number) {
            if (isNaN(number) || number.length === 0) return "";

            var money = parseInt(number).toLocaleString('vn').replace(/,/g, '.');
            return money;
          }
        }, {
          key: "fromView",
          value: function fromView(money) {
            return money.replace(/[^\d]/gi, '');
          }
        }]);

        return MoneyToNumberValueConverter;
      })();

      _export("MoneyToNumberValueConverter", MoneyToNumberValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUM7QUFDTCxrQkFBSSxFQUFFLEVBQUU7QUFDUixrQkFBSSxFQUFFLEVBQUU7QUFDUixzQkFBUSxFQUFFLElBQUk7QUFDZCxtQkFBSyxFQUFFLElBQUk7QUFDWCxvQkFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1dBQ0g7OztlQUVhLGVBQUc7QUFDZixtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLEVBQUs7QUFDMUMscUJBQU8sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLFFBQVEsQUFBQyxDQUFBO2FBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7V0FDUDs7O2VBN0RVLE9BQU87Ozs7O0FBZ0VQLGlDQUEyQjtpQkFBM0IsMkJBQTJCO2dDQUEzQiwyQkFBMkI7OztxQkFBM0IsMkJBQTJCOztpQkFDaEMsZ0JBQUMsTUFBTSxFQUFFO0FBQ2IsZ0JBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFHLE9BQU8sRUFBRSxDQUFDOztBQUdyRCxnQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JFLG1CQUFPLEtBQUssQ0FBQztXQUNkOzs7aUJBRU8sa0JBQUMsS0FBSyxFQUFFO0FBQ2QsbUJBQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7V0FDckM7OztlQVhVLDJCQUEyQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIGJhc2VQcm9kdWN0cyA9IFtcbiAgICB7aWQ6IDEsICBuYW1lOiBcIkLDoW5oIHRyw6FuZyBtZVwiLCAgICAgICAgICAgICAgICB1bml0OiBcIjEwMGdyL2Lhu4tjaFwiLCBxdWFudGl0eTogMSwgcHJpY2U6IDYwMDAsICB3ZWlnaHQ6IDEwMH0sXG4gICAge2lkOiAyLCAgbmFtZTogXCJCw6FuaCB0csOhbmcgbXXhu5FpXCIsICAgICAgICAgICAgICB1bml0OiBcIjEwMGdyL2Lhu4tjaFwiLCBxdWFudGl0eTogMSwgcHJpY2U6IDYwMDAsICB3ZWlnaHQ6IDEwMH0sXG4gICAge2lkOiAzLCAgbmFtZTogXCJCw6FuaCB0csOhbmcgdHLhu5luIHThuq9jXCIsICAgICAgICAgIHVuaXQ6IFwiMTAwZ3IvYuG7i2NoXCIsIHF1YW50aXR5OiAxLCBwcmljZTogNjAwMCwgIHdlaWdodDogMTAwfSxcbiAgICB7aWQ6IDQsICBuYW1lOiBcIkLDoW5oIHRyw6FuZyBzYSB04bq/IHThuq9jXCIsICAgICAgICAgdW5pdDogXCIxMDBnci9i4buLY2hcIiwgcXVhbnRpdHk6IDEsIHByaWNlOiA2MDAwLCAgd2VpZ2h0OiAxMDB9LFxuICAgIHtpZDogNSwgIG5hbWU6IFwiQsOhbmggdHLDoW5nIGLGoSBk4bq7byB0w7RtXCIsICAgICAgICB1bml0OiBcIjEyMGdyL2Lhu4tjaFwiLCBxdWFudGl0eTogMSwgcHJpY2U6IDEwMDAwLCB3ZWlnaHQ6IDEyMH0sXG4gICAge2lkOiA2LCAgbmFtZTogXCJCw6FuaCB0csOhbmcgZOG6u28gY2F5XCIsICAgICAgICAgICB1bml0OiBcIjM1MGdyL3jhuqVwXCIsICBxdWFudGl0eTogMSwgcHJpY2U6IDI1MDAwLCB3ZWlnaHQ6IDM1MH0sXG4gICAge2lkOiA3LCAgbmFtZTogXCJCw6FuZyB0csOhbmcgZMOobyB0w7RtXCIsICAgICAgICAgICB1bml0OiBcIjUwMGdyL3jhuqVwXCIsICBxdWFudGl0eTogMSwgcHJpY2U6IDI3MDAwLCB3ZWlnaHQ6IDUwMH0sXG4gICAge2lkOiA4LCAgbmFtZTogXCJCw6FuaCB0csOhbmcgZOG6u28gbWVcIiwgICAgICAgICAgICB1bml0OiBcIjM1Z3IveOG6pXBcIiwgICBxdWFudGl0eTogMSwgcHJpY2U6IDI1MDAwLCB3ZWlnaHQ6IDM1fSxcbiAgICB7aWQ6IDksICBuYW1lOiBcIk114buRaSB0w7RtIGxv4bqhaSAxXCIsICAgICAgICAgICAgICB1bml0OiBcIjUwMGdyXCIsICAgICAgcXVhbnRpdHk6IDEsIHByaWNlOiA4MDAwMCwgd2VpZ2h0OiA1MDB9LFxuICAgIHtpZDogMTAsIG5hbWU6IFwiTXXhu5FpIGNoYXkgbG/huqFpIDFcIiwgICAgICAgICAgICAgdW5pdDogXCI1MDBnclwiLCAgICAgIHF1YW50aXR5OiAxLCBwcmljZTogNjAwMDAsIHdlaWdodDogNTAwfSxcbiAgICB7aWQ6IDExLCBuYW1lOiBcIkLDoW5oIHRyw6FuZyBsw6BtIGLDoW5oIHRyw6FuZyBtZVwiLCB1bml0OiBcIjUwMGdyXCIsICAgICAgcXVhbnRpdHk6IDEsIHByaWNlOiAzMzAwMCwgd2VpZ2h0OiA1MDB9LFxuICAgIHtpZDogMTIsIG5hbWU6IFwiQsOhbmggdHLDoW5nIGNodeG7kWlcIiwgICAgICAgICAgICAgdW5pdDogXCIxMCBjw6FpL3jhuqVwXCIsIHF1YW50aXR5OiAxLCBwcmljZTogMTUwMDAsIHdlaWdodDogMH0sXG4gICAge2lkOiAxMywgbmFtZTogXCJCw6FuaCB0csOhbmcgcGjGoWkgc8awxqFuZyBt4bq3blwiLCAgICB1bml0OiBcIjkgY8OhaS944bqlcFwiLCAgcXVhbnRpdHk6IDEsIHByaWNlOiAxMzAwMCwgd2VpZ2h0OiAwfVxuICBdOyBcblxuICBwcm9kdWN0cyA9IFtdOyBcbiAgcHJvZHVjdCA9IHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIlwiLCBcbiAgICB1bml0OiBcIlwiLFxuICAgIHF1YW50aXR5OiBudWxsLFxuICAgIHByaWNlOiBudWxsLFxuICAgIHdlaWdodDogbnVsbFxuICB9O1xuXG5cbiAgcHJvZHVjdFNlbGVjdENoYW5nZShldmVudCkge1xuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmJhc2VQcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBpZCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAvLyBDbG9uZSBvYmplY3RcbiAgICAgIHRoaXMucHJvZHVjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9kdWN0KCkge1xuICAgIHRoaXMucHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3QpO1xuICAgIHRoaXMuY2xlYXJQcm9kdWN0KCk7XG4gIH1cblxuICBkZWxldGVQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiB7cmV0dXJuIGl0ZW0uaWQgIT0gcHJvZHVjdC5pZDt9KTtcbiAgfVxuXG4gIGNsZWFyUHJvZHVjdCgpIHtcbiAgICB0aGlzLnByb2R1Y3QgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIG5hbWU6IFwiXCIsIFxuICAgICAgdW5pdDogXCJcIixcbiAgICAgIHF1YW50aXR5OiBudWxsLFxuICAgICAgcHJpY2U6IG51bGwsXG4gICAgICB3ZWlnaHQ6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHRvdGFsUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldiArIChjdXJyLnByaWNlKiBjdXJyLnF1YW50aXR5KVxuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb25leVRvTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcobnVtYmVyKSB7XG4gICAgaWYgKGlzTmFOKG51bWJlcikgfHwgbnVtYmVyLmxlbmd0aCA9PT0gMCApIHJldHVybiBcIlwiO1xuICAgIFxuICAgIC8vIGZvcm1hdCBieSBsb2NhbGUgVk4gYW5kIHJlcGxhY2UgY29tbWEgYnkgZG90XG4gICAgbGV0IG1vbmV5ID0gcGFyc2VJbnQobnVtYmVyKS50b0xvY2FsZVN0cmluZygndm4nKS5yZXBsYWNlKC8sL2csICcuJyk7XG4gICAgcmV0dXJuIG1vbmV5O1xuICB9XG5cbiAgZnJvbVZpZXcobW9uZXkpIHtcbiAgICByZXR1cm4gbW9uZXkucmVwbGFjZSgvW15cXGRdL2dpLCAnJyk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
