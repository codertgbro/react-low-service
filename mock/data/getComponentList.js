/**
 * @description 组件列表
 * 
 * 
 */

// const Mock = require('mockjs')

// const Random = Mock.Random

function getComponentList() {
  return [
    {
      fe_id: 'c1', // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
      type: 'questionTitle', // 组件类型，不能重复，前后端统一好
      title: '标题',
      isVisable: true,
      isLock: false,
      props: { text: '个人信息调研', level: 1, isCenter: false }
    },
    {
      fe_id: 'c2',
      type: 'questionInput',
      title: '输入框1',
      isVisable: true,
      isLock: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' }
    },
    {
      fe_id: 'c3',
      type: 'questionInput',
      title: '输入框1',
      isVisable: true,
      isLock: false,
      props: { title: '你的电话', placeholder: '请输入电话...' }
    },
  ]
}

module.exports = getComponentList