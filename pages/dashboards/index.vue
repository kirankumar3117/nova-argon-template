<template>
  <div class="py-4 container-fluid">
    <div class="row">

      <!-- User Profile  -->
      <div class="w-100 d-flex py-3">
        <ProfileCard :profile-details="profileDetails" />
      </div>

      <div class="col-lg-12">
        <div class="row">
          <div
            v-for="{
              title,
              value,
              description,
              icon: { component, background, shape },
            } of cardData"
            :key="title"
            class="col-lg-3 col-md-6 col-12"
          >
            <MiniStatisticsCard
              :title="title"
              :value="value"
              :description="description"
              :icon="{
                component: component,
                background: background,
                shape: shape,
              }"
            />
          </div>
        </div>
        
        <!-- Graphs and Chats  -->
        <div class="row">
          <div class="col-lg-6 mb-lg">
            <div class="card z-index-2">
              <div class="mb-0 pb-0 card-header">
                <h6>Overall Sales</h6>
              </div>
              <div class="p-0 card-body">
                <div class="chart">
                  <GradientLineChart
                    :chart-options="{
                      chart: {
                        type: 'area',
                      },
                      colors: ['#4BB543'],
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        curve: 'smooth',
                      },
                      legend: {
                        show: false,
                      },
                    }"
                    :series="[
                      {
                        name: 'Mobile Apps',
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-lg">
            <div class="card z-index-2">
              <div class="p-0 card-body">
                <div class="chart">
                   <BarChart
                        title="Overall Sales"
                        height="300"
                        :chart="{
                            labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
                            datasets: {
                            label: 'Sales by age',
                            data: [15, 20, 12, 60, 20, 15],
                            },
                        }"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mini Graph -->
        <div class="row mt-4">
          <div v-for="o in 4" :key="o"
            class="col-lg-3 col-md-6 col-12"
          >
            <LineChart
              title="Sales"
              subTitle="3kg|Steel"
              :value="{
                amount: 'GHS 1500',
                percentage: { value: '+90%', color: 'success' },
              }"
            />
          </div>
        </div>
        
        <!-- Table  -->
          <div>
            <DataTable />
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

import ProfileCard from '@/components/cards/ProfileCard.vue'
import BarChart from '@/components/charts/BarChart.vue';
import LineChart from "@/components/charts/LineChart.vue";
import MiniStatisticsCard from "@/components/cards/MiniStatisticsCard.vue";
import GradientLineChart from "@/components/charts/GradientLineChart.vue";
import DataTable from "@/components/tables/DataTable.vue"

definePageMeta({
  layout: "default",
});

const profileDetails = [
  {
    profile_image: "@/assets/img/team-1.jpg",
    name: "Yaw Graham",
    role: "Distributer",
    status: "active",
    user_id: "101",
    joining: "2020/12/15",
    phone: "9987654321",
    zone: "Northen",
    email: "demo@gmail.com",
    subzone: "N12",
    address: "Agbo-Ashongom Road"
  }
]

const cardData = [
  {
    title: "Overall customers",
    value: "6000",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+1.5%</span> since last week`,
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-primary",
      shape: "rounded-circle",
    },
  },
  {
    title: "Today's Users",
    value: "2,300",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+3%</span> since last week`,
    icon: {
      component: "ni ni-world",
      background: "bg-gradient-danger",
      shape: "rounded-circle",
    },
  },
  {
    title: "New Clients",
    value: "+3,462",
    description: `<span
                  class='text-sm font-weight-bolder text-danger'
                  >-2%</span> since last quarter`,
    icon: {
      component: "ni ni-paper-diploma",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Sales",
    value: "$103,430",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+5%</span> than last month`,
    icon: {
      component: "ni ni-cart",
      background: "bg-gradient-warning",
      shape: "rounded-circle",
    },
  },
];

const sales = {
  us: {
    country: "United States",
    sale: 2500,
    value: "$230,900",
    bounce: "29.9%",
    flag: US,
  },
  germany: {
    country: "Germany",
    sale: "3.900",
    value: "$440,000",
    bounce: "40.22%",
    flag: DE,
  },
  britain: {
    country: "Great Britain",
    sale: "1.400",
    value: "$190,700",
    bounce: "23.44%",
    flag: GB,
  },
  brasil: {
    country: "Brasil",
    sale: "562",
    value: "$143,960",
    bounce: "32.14%",
    flag: BR,
  },
};
</script>
  