<template>
    <el-container class="home-container">
        <el-header>Header<el-button type="info" @click='logout'>退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 左侧导航 -->
                <el-menu :background-color="color.backgroundColor" :text-color="color.textColor" :active-text-color="color.activeColor"
                    unique-opened router :default-active="$route.path">
                    <el-submenu :index="'/'+item.path" v-for="item in menuList" :key="item.id">
                        <!-- 一级菜单模板区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i :class="iconsObj[item.id]"></i>
                            <!-- 文本 -->
                            <span>{{item.authName}}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key='subItem.id'>
                            <!-- 二级菜单模板区域 -->
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>{{subItem.authName}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    // import {
    //   GoodsData
    // } from "network/home";

    export default {
        name: 'Home',
        data() {
            return {
                //左侧菜单
                menuList: [],
                color: {
                    activeColor: '#409bff',
                    textColor: '#fff',
                    backgroundColor: '#333744'
                },
                iconsObj: {
                    '125': 'el-icon-user-solid',
                    '103': 'el-icon-s-help',
                    '101': 'el-icon-s-goods',
                    '102': 'el-icon-s-order',
                    '145': 'el-icon-s-marketing'
                },
                //被激活的链接
                // activePath:''
            }
        },
        created() {
            this.getMenuList()
            // this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            logout() {
                window.sessionStorage.removeItem("token")
                this.$router.push('/login')
            },
            // 获取所有菜单
            async getMenuList() {
                const {
                    data: res
                } = await this.$http.get('menus')
                if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
                this.menuList = res.data
                console.log(res);
            },
            //保存激活状态
            // activeMenu(activePath){
            //   window.sessionStorage.setItem('activePath',activePath)
            // }

        }
    }
</script>

<style lang="less" scoped>
    .el-header {
        background-color: #373d41;
    }

    .el-aside {
        background-color: #333744;

        .el-menu {
            border-right: none;
        }
    }

    .el-main {
        background-color: #eaedf1;
    }

    .home-container {
        height: 100%;
    }
</style>
