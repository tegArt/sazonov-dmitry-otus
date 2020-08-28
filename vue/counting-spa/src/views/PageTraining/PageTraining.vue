<template>
  <div class="page-training">
    <div class="header">
      <a href="/">
        Отмена
      </a>

      <div class="timer">
        Осталось {{ countdown }} с.
      </div>
    </div>

    <div class="task">
      {{ task }} =
    </div>

    <input
      type="text"
      class="answer"
      v-model="answer"
    />
    <div class="note">
      Знаки после запятой, если есть, игнорируются
    </div>

    <div class="footer">
      <button
        @click="getNextTask"
      >
        Пропустить
      </button>

      <button
        @click="checkAnswer"
        class="-main"
      >
        Отправить ответ
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PageTraining',
  data: function () {
    return {
      timer: 0,
      countdown: this.$store.state.time * 60,
      task: '',
      answer: '',
    }
  },
  computed: {
    ...mapState([
      'lastTrainingCount',
      'lastTrainingSuccessfullyCount',
      'difficulty',
      'isSum',
      'isSub',
      'isMult',
      'isDiv',
      'isPow',
    ]),
    mathOperations: function () {
      let operations = [];

      if (this.isSum) operations.push('+');
      if (this.isSub) operations.push('-');
      if (this.isMult) operations.push('*');
      if (this.isDiv) operations.push('/');

      return operations;
    },
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => {
        this.countdown --;

        if (this.countdown === 0) {
          this.$router.push('/');
        }
      }, 1000);
    },
    generateTask: function () {
      let task = '';

      for (let i = 0; i <= this.difficulty; i++) {
        task += ` ${this.getRandomInt(10, 777)} `;

        if (i < this.difficulty) {
          task += ` ${this.mathOperations[this.getRandomInt(0, this.mathOperations.length - 1)]} `;
        }
      }

      this.task = task;
    },
    getRandomInt: function (min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    checkAnswer: function () {
      if (parseInt(this.answer) === parseInt(eval(this.task))) {
        this.$store.commit('setField', {
          field: 'lastTrainingSuccessfullyCount',
          newValue: this.lastTrainingSuccessfullyCount + 1,
        });
      }

      this.generateTask();
      this.answer = '';

      this.$store.commit('setField', {
        field: 'lastTrainingCount',
        newValue: this.lastTrainingCount + 1,
      });
    },
    getNextTask: function () {
      this.generateTask();

      this.$store.commit('setField', {
        field: 'lastTrainingCount',
        newValue: this.lastTrainingCount + 1,
      });
    },
  },
  mounted() {
    this.$store.commit('setField', {
      field: 'lastTrainingCount',
      newValue: 0,
    });

    this.$store.commit('setField', {
      field: 'lastTrainingSuccessfullyCount',
      newValue: 0,
    });

    this.generateTask();
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
}
</script>

<style lang="scss" scoped>
  .page-training {
    font-size: 18px;

    a {
      color: #222;
      text-decoration: none;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 80px;
  }

  .task {
    margin: 20px 0 80px;
    font-size: 26px;
    text-align: center;
    user-select: none;
  }

  .answer {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 16px;
    font-size: 22px;
    border: #ccc 2px solid;
    border-radius: 4px;
  }

  .note {
    margin: 4px;
    color: #999;
    font-size: 12px;
  }

  .footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px 0;
  }

  button {
    display: inline-block;
    padding: 10px 12px;
    color: #444;
    text-decoration: none;
    background: rgba(0, 200, 0, 0.05);
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      box-shadow: 0 0 6px rgba(0, 200, 0, 0.8);
    }

    &.-main {
      background: rgba(0, 200, 0, 0.2);
    }
  }
</style>
