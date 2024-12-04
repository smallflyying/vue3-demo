<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}, {{ n1 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive, toRefs, toRef} from 'vue';

    // 数据
    let person = reactive({
        name: '张三',
        age: 18
    })

    let {name, age} = toRefs(person);
    let n1 = toRef(person, 'age')
    
    console.log(n1)

    // console.log(toRefs(person))
    // 方法
    function changeName() {
        name.value += '~'
        console.log(name.value, person.name)
    }
    function changeAge() {
        age.value += 1
        console.log(age)
    }

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>