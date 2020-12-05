<template>
  <div>
    <div class="week">
      <div>周一</div>
      <div>周二</div>
      <div>周三</div>
      <div>周四</div>
      <div>周五</div>
      <div>周六</div>
      <div>周七</div>
    </div>
    <div class="calendar-box">
      <div
        v-for="item in allDate"
        :key="item.date"
        :class="{ today: item.date === todayDate }"
      >
        <slot name="default" :data="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  model: {
    prop: "propDate",
    event: "input",
  },
  props: {
    propDate: {
      type: Date,
      default: new Date(),
    },
    moreBefore: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      todayDate: this.getDateObj(new Date()).date,
      allDate: [],
    };
  },
  mounted() {},
  watch: {
    propDate: {
      handler: function (propDate) {
        this.init();
      },
      immediate: true,
    },
    moreBefore: {
      handler: function (moreBefore) {
        this.init();
      },
      immediate: true,
    },
  },
  methods: {
    init() {
      var year = this.propDate.getFullYear();
      var month = this.propDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      var curMonthFirstDay = new Date(year + "-" + month + "-" + "01");
      var day = curMonthFirstDay.getDay();
      var date = curMonthFirstDay.getDate();
      this.allDate = Array(42 + this.moreBefore * 7)
        .fill("")
        .map((item, index) => {
          var dataObj = new Date(year + "-" + month + "-" + "01");
          dataObj.setDate(date + index + 1 - day - this.moreBefore * 7);
          return dataObj;
        })
        .map((item) => this.getDateObj(item));
    },
    getDateObj(date) {
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 < 10
          ? "0" + date.getMonth() + 1
          : date.getMonth() + 1 + "";
      let day = date.getDate();
      let week = date.getDay();
      return {
        date: year + "-" + month + "-" + day,
        week: week,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.week {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 100px;

  >div {
    border: 1px solid #CCC;
  }
}

.calendar-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 200px;

  >div {
    border: 1px solid #CCC;
  }
}

.today {
  background: #CCC;
}
</style>
