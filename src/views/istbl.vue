<template>
  <NextTable :column-options="cnos" v-bind="tableOptions" ref="singleTableRef">
    <!-- 具名插槽 -->
    <template v-slot:other>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableOptions.data[1])">选择选项</el-button>
        <el-button @click="setCurrent()">清空选项</el-button>
      </div>
    </template>
  </NextTable>
</template>

<script>
import NextTable from "../components/NextTable.vue";
export default {
  name: "isTable",
  components: {
    NextTable,
  },
  data() {
    return {
      tableOptions: {
        style: { width: "100vw" },
        data: [
          {
            date: "2016-05-03",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-02",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-04",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            date: "2016-05-01",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
          },
        ],
      },
      cnos: [
        {
          lable: "日期",
          prop: "date",
          option: {
            width: 180,
            align: "center",
          },
        },
        {
          lable: "姓名",
          prop: "name",
          option: {
            width: 220,
            align: "right",
          },
        },
        {
          lable: "地址",
          prop: "address",
          option: {
            width: 260,
          },
        },
      ],
    };
  },
  methods: {
    setCurrent: function (row) {
      console.log(this.$refs.singleTableRef)
      // this.$refs.singleTableRef.setCurrentRow(row)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
