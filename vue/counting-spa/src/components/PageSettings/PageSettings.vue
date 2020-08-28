<template>
  <div>
    <h1>Привет!</h1>
    <p>Добро пожаловать на {{ day }} тренировочный день, ваш последний результат - решено {{ lastTrainingSuccessfullyCount }} из {{ lastTrainingCount }}. Общая точность {{ successfullyPercentage }}%</p>

    <h2>Настройки</h2>

    <div class="settings-group">
      <input
        v-model="time"
        type="range"
        min="1"
        max="15"
      />
      Длительность {{ time }} минут
    </div>

    <div class="settings-group">
      <input
        v-model="difficulty"
        type="range"
        min="1"
        max="10"
      />
      Сложность {{ difficulty }}
    </div>

    <div class="settings-group">
      <div>
        <label>
          <input
            v-model="isSum"
            type="checkbox"
            value="sum"
          />
          Суммирование
        </label>
      </div>

      <div>
        <label>
          <input
            v-model="isSub"
            type="checkbox"
            value="sub"
          />
          Вычитание
        </label>
      </div>

      <div>
        <label>
          <input
            v-model="isMult"
            type="checkbox"
            value="mult"
          />
          Умножение
        </label>
      </div>

      <div>
        <label>
          <input
            v-model="isDiv"
            type="checkbox"
            value="div"
          />
          Деление
        </label>
      </div>

      <div>
        <label>
          <input
            v-model="isPow"
            type="checkbox"
            value="pow"
          />
          Возведение в степень
        </label>
      </div>
    </div>

    <button
      v-if="isTypeChecked"
      class="button"
    >
      Let's play!
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageSettings',
  props: {},
  data: function () {
    return {
      day: 7,
      lastTrainingSuccessfullyCount: 14,
      lastTrainingCount: 20,
      time: 10,
      difficulty: 3,
      isSum: false,
      isSub: false,
      isMult: false,
      isDiv: false,
      isPow: false,
    };
  },
  computed: {
    successfullyPercentage: function () {
      return this.lastTrainingSuccessfullyCount / this.lastTrainingCount * 100;
    },
    isTypeChecked: function () {
      return this.isSum || this.isSub || this.isMult || this.isDiv || this.isPow;
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
    padding: 6px 12px;
    background: rgba(0, 200, 0, 0.2);
    border: #eee 1px solid;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
