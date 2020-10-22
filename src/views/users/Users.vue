<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区 -->
        <el-card class="box-card">
            <!-- 搜索与添加 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" border stripe>
                <el-table-column type="index" label="序号"  align="center" width="90"></el-table-column>
                <el-table-column prop="username" label="姓名" align="center"></el-table-column>
                <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
                <el-table-column prop="mobile" label="电话" align="center"></el-table-column>
                <el-table-column prop="role_name" label="角色" align="center"></el-table-column>
                <el-table-column prop="mg_state" label="状态" align="center"></el-table-column>
                <el-table-column label="操作" align="center"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //获取用户列表的参数对象
                queryInfo: {
                    query: '',
                    pagenum: 1,
                    pageSize: 2,
                },
                tableData: [{
                    "id": 1,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 2,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 3,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 4,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 5,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 6,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 7,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 8,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 9,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 10,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 11,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 12,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 13,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }, {
                    "id": 14,
                    "username": "tige117",
                    "mobile": "18616358651",
                    "type": 1,
                    "email": "tige112@163.com",
                    "create_time": "2017-11-09T20:36:26.000Z",
                    "mg_state": true, // 当前用户的状态
                    "role_name": "炒鸡管理员"
                }],
                total: 0
            }
        },
        created() {
            // this.getUserList()
        },
        methods: {
            // async getUserList() {
            //     const {
            //         data: res
            //     } = await this.$http.get('uesrs', {
            //         params: this.queryInfo
            //     })
            //     if (res.meta.state !== 200) {
            //         return this.$message.error('获取用户列表失败')
            //     }
            //     this.userList = res.data.users
            //     this.total = res.data.total
            //     console.log(res);
            // }
        }
    }
</script>

<style scoped lang="less">
    .el-table{
        margin-top: 20px;
    }
</style>
