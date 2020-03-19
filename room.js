var rooms = [{
        "name": "市景三人房",
        "eng": "Urban View Triple Room",
        "price": 7000,
        "amount": 0,
        "cover": "市景三人房.jpg",
        "discount": 0.9,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "市景雙床房",
        "eng": "Urban View Double Room",
        "price": 7800,
        "amount": 0,
        "cover": "市景雙床房.jpg",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    },
    {
        "name": "行政套房",
        "eng": "Executive Suite",
        "price": 5400,
        "amount": 0,
        "cover": "行政套房.jpg",
        "discount": 0.85,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "典雅景觀房",
        "eng": "Elegant Landscape Room",
        "price": 9800,
        "amount": 0,
        "cover": "典雅景觀房.jpg",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": true
        }
    },
    {
        "name": "典雅雙人房",
        "eng": "Elegant Double Room",
        "price": 5600,
        "amount": 0,
        "cover": "典雅雙人房.jpg",
        "discount": 0.9,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": false
        }
    },
    {
        "name": "奢華四人房",
        "eng": "Luxury Four Room",
        "price": 8400,
        "amount": 0,
        "cover": "奢華四人房.jpg",
        "discount": 0.6,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "尊爵雙床房",
        "eng": "Exclusive Double Room",
        "price": 23000,
        "amount": 0,
        "cover": "尊爵雙床房.jpg",
        "discount": 0.75,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "經典四人房",
        "eng": "Quadruple room",
        "price": 8500,
        "amount": 0,
        "cover": "經典四人房.jpg",
        "discount": 0.7,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    },
    {
        "name": "經濟雙人房",
        "eng": "Economy Double Room",
        "price": 8500,
        "amount": 0,
        "cover": "經濟雙人房.jpg",
        "discount": 0.7,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    },
    {
        "name": "標準三人房",
        "eng": "Standard Triple Room",
        "price": 8500,
        "amount": 0,
        "cover": "標準三人房.jpg",
        "discount": 0.7,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    }
];

Vue.component("Room", {
    template: "#room",
    props: ["room_data", "hotel_discount", "hotel_tip", "delete_room", "id"],
    data: function() {
        return {
            image: ".\\\\images\\\\"
        }
    },
    methods: {
        bg_css: function(url) {
            return {
                "background-image": "url(" + this.image + url + ")",
                // "background-color": "#555"

                // "background-image": "url('" + url + "')",

            };
        },

    },
    computed: {
        final_discount: function() {
            return this.room_data.discount * this.hotel_discount;
        },
        final_price: function() {
            return parseInt(this.room_data.price * this.final_discount + 1.0 * this.hotel_tip);
        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        rooms: rooms,
        discount: 0.9,
        tip: 200
    },
    methods: {
        add_new_room: function() {
            this.rooms.push({
                "name": "新房間",
                "eng": "New room",
                "price": 0,
                "amount": 0,
                "cover": "經濟雙人房.jpg",
                "discount": 1,
                "equipment": {
                    "wifi": true,
                    "bathtub": true,
                    "breakfast": true
                }
            });
        },
        price_raise: function(delta) {
            // var vobj = this;
            this.rooms.forEach(function(obj) {
                obj.price += delta;
            });
        },
        delete_room: function(id) {
            this.rooms.splice(id, 1);
        }
    }
});