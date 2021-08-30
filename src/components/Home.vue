
<template>
   <Header></Header>
   <HeroHeader></HeroHeader>
   <Categories></Categories>
</template>



<script>
import header from '@/components/statics/Header'
import heroHeader from '@/components/statics/HeroHeader'
import categories from '@/components/statics/Categories'

export default {
  components: {
    Header: header,
    HeroHeader: heroHeader,
    Categories: categories,
  }
}
</script>