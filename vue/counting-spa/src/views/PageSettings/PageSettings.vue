<template>
  <div>
    <h1>Привет!</h1>
    <p>Добро пожаловать на {{ day }} тренировочный день.</p>
    <p v-if="isStatisticEnable">
      Ваш последний результат - решено {{ lastTrainingSuccessfullyCount }} из {{ lastTrainingCount }}. Общая точность {{ successfullyPercentage }}%
    </p>

    <h2>Настройки</h2>

    <div class="settings-group">
      <input
        type="range"
        min="1"
        max="15"
        :value="time"
        @change="setField($event, 'time')"
      />
      Длительность {{ time }} минут
    </div>

    <div class="settings-group">
      <input
        type="range"
        min="1"
        max="5"
        :value="difficulty"
        @change="setField($event, 'difficulty')"
      />
      Сложность {{ difficulty }}
    </div>

    <div class="settings-group">
      <div>
        <label>
          <input
            type="checkbox"
            @change="setField($event, 'isSum')"
            :checked="isSum"
          />
          Суммирование
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            @change="setField($event, 'isSub')"
            :checked="isSub"
          />
          Вычитание
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            @change="setField($event, 'isMult')"
            :checked="isMult"
          />
          Умножение
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            @change="setField($event, 'isDiv')"
            :checked="isDiv"
          />
          Деление
        </label>
      </div>
    </div>

    <a
      v-if="isTypeChecked"
      href="/training"
      class="button"
    >
      Let's play!
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PageSettings',
  computed: {
    ...mapState([
      'startDate',
      'lastTrainingCount',
      'lastTrainingSuccessfullyCount',
      'time',
      'difficulty',
      'isSum',
      'isSub',
      'isMult',
      'isDiv',
    ]),
    day: function () {
      const start = new Date(this.startDate);
      const now = new Date();

      return Math.floor((now - start)/1000/60/60/24) + 1;
    },
    isStatisticEnable: function () {
      return this.lastTrainingCount !==0;
    },
    successfullyPercentage: function () {
      return Math.round(this.lastTrainingSuccessfullyCount / this.lastTrainingCount * 100);
    },
    isTypeChecked: function () {
      return this.isSum || this.isSub || this.isMult || this.isDiv || this.isPow;
    },
  },
  methods: {
    setField: function (event, field) {
      let newValue = event.target.type === 'checkbox' ?
          event.target.checked :
          event.target.value;

      this.$store.commit('setField', {
        field,
        newValue,
      });
    },
  },
}
</script>

<style lang="scss" scoped>
  .settings-group {
    margin: 20px 0;

    div {
      margin: 10px 0;
    }

    label {
      cursor: pointer;
    }
  }

  .button {
    display: inline-block;
    padding: 10px 12px;
    color: #444;
    text-decoration: none;
    background: rgba(0, 200, 0, 0.2);
    border-radius: 4px;
    transition: all .2s ease;

    &:hover {
      box-shadow: 0 0 6px rgba(0, 200, 0, 0.8);
    }
  }
</style>
