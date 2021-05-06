<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <el-menu
          :default-openeds="['0']"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <!-- 加上router属性之后就会index上的值会变成跳转路径 -->
          <template v-for="(item, index) in menus">
            <el-submenu
              :index="item.index"
              v-if="item.subMenus && item.subMenus.length"
              :key="index"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.text }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index="tItem.index"
                  v-for="(tItem, tIndex) in item.subMenus"
                  :key="tIndex"
                  >{{ tItem.text }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="item.index" :key="item.index">
              <!-- 绑个父菜单的 icon -->
              <i :class="item.icon"></i>
              <!-- 再绑个父菜单的名称 text -->
              <span slot="title">{{ item.text }}</span>
            </el-menu-item>
          </template>
        </el-menu>
        <el-button type="primary" plain class="menu-btn"
          ><i
            class=" btn-style "
            @click="toCollapse"
            :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          ></i>
        </el-button>
      </el-aside>

      <el-container>
        <el-header>
          <SystemHeader></SystemHeader>
        </el-header>
        <el-main>
          <SystemData></SystemData>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SystemData from './SystemData'
import SystemHeader from './SystemHeader'
const menus = [
  {
    text: '梦想',
    icon: 'el-icon-position',
    subMenus: [
      {
        text: '繁华一梦'
      },
      {
        text: '一叶知秋'
      },
      {
        text: '余音绕梁'
      }
    ]
  },
  {
    text: '现实',
    icon: 'el-icon-edit',
    subMenus: [
      {
        text: '蝇营狗苟'
      },
      {
        text: '负重前行'
      }
    ]
  },
  {
    text: '二次元',
    icon: 'el-icon-loading'
    // subMenus: [
    //   {
    //     text: 'YYDS'
    //   }
    // ]
  },
  {
    text: '知行合一',
    icon: 'el-icon-s-promotion',
    subMenus: [
      {
        text: '行者'
      },
      {
        text: '书奴'
      }
    ]
  }
].map((x, i) => {
  return {
    ...x,
    subMenus: (x.subMenus || []).map((j, k) => {
      return {
        ...j,
        index: `${i}-${k}`
      }
    }),
    index: `${i}`
  }
})
export default {
  name: 'Home',
  components: {
    SystemData,
    SystemHeader
  },
  data () {
    return {
      isCollapse: false,
      menus
    }
  },
  methods: {
    toCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  /deep/.el-aside {
    background-color: #545c64;
  }
  /deep/ .el-menu {
    border: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }
  .btn-style {
    font-size: 26px;
  }
  .el-button {
    padding: 5px 10px;
  }
  .menu-btn {
    float: right;
    margin-right: 10px;
  }
}
</style>
