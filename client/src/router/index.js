import { createRouter, createWebHistory } from 'vue-router'

// ===== Users =====
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'

// ===== Menus =====
import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'

// ===== Coffees =====
<<<<<<< HEAD
import CoffeeIndex from '../components/Coffees/Index.vue'
import CoffeeCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeeEdit from '../components/Coffees/EditCoffee.vue'
import CoffeeShow from '../components/Coffees/ShowCoffee.vue'

// ===== Orders (เพิ่มตามโจทย์) =====
import OrderIndex from '../components/Orders/Index.vue'

// ===== Blogs (ตามอาจารย์) =====
import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

// ===== Login =====
import Login from '../components/Users/Login.vue'
=======
import CoffeeIndex from '../components/coffees/index.vue'
import CoffeeCreate from '../components/coffees/CreateCoffee.vue'
import CoffeeEdit from '../components/coffees/EditCoffee.vue'
import CoffeeShow from '../components/coffees/ShowCoffee.vue'   // ⭐ เพิ่มบรรทัดนี้
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ---------- User Routes ----------
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
<<<<<<< HEAD
      path: '/user/edit/:userId',
=======
      path: '/user/edit/:id',
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
      name: 'user-edit',
      component: UserEdit
    },
    {
<<<<<<< HEAD
      path: '/user/:userId',
=======
      path: '/user/:id',
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
      name: 'user-show',
      component: UserShow
    },

    // ---------- Menu Routes ----------
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/menu/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/menu/edit/:menuId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menu/:menuId',
      name: 'menu-show',
      component: MenuShow
    },

    // ---------- Coffee Routes ----------
    {
      path: '/coffees',
      name: 'coffees',
      component: CoffeeIndex
    },
    {
      path: '/coffee/create',
      name: 'coffee-create',
      component: CoffeeCreate
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'coffee-edit',
      component: CoffeeEdit
    },
    {
<<<<<<< HEAD
      path: '/coffee/:coffeeId',
      name: 'coffee-show',
      component: CoffeeShow
    },

    // ---------- Order Routes (Lab 10) ----------
    {
      path: '/orders',
      name: 'orders',
      component: OrderIndex
    },

    // ---------- Blog Routes ----------
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog-show',
      component: BlogShow
    },

    // ---------- Login ----------
    {
      path: '/login',
      name: 'login',
      component: Login
=======
      path: '/coffee/:coffeeId',          // ⭐ เพิ่ม route ดูรายละเอียด
      name: 'coffee-show',
      component: CoffeeShow
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
    }
  ]
})

export default router
