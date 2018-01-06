export default {
  header: '显示',
  headerText: '显示辅助器允许您控制内容的显示，会根据当前的视野或实际的元素显示类型来作为可见性的条件。',
  toc: [
    {
      text: '介绍',
      href: 'introduction'
    },
    {
      text: '能见度',
      href: 'visibility'
    },
    {
      text: '显示',
      href: 'display'
    },
    {
      text: '示例',
      href: 'examples'
    }
  ],
  visibilityHeader: '能见度',
  visibilityText: '有条件地显示基于当前**视野**的元素。这些类使用格式`hidden-{breakpoint}-{condition}`',
  breakpointText: '_断点（breakpoint）_设置视野大小:',
  breakpoints: [
    '`xs` - 格外小的设备',
    '`sm` - 小型设备',
    '`md` - 中型设备',
    '`lg` - 大型设备',
    '`xl` - 格外大的设备',
  ],
  conditionText: '_条件（condition）_适用于基于以下前置条件的类:',
  conditions: [
    '`only` - 仅通过`xl`断点将元素隐藏在`xs`上',
    '`and-down` - 在指定的断点处隐藏元素，并通过lg断点向下隐藏元素',
    '`and-up` - 通过`lg`断点隐藏指定断点上的元素，并使`sm`上升'
  ],
  displayHeader: '显示',
  displayText: '指定元素的`display`属性。这些类可以使用`d-{display}`格式得到应用。',
  displays: [
    '`d-inline-flex` - 将元素显示属性设置为`inline-flex`',
    '`d-flex` - sets the element display property to `flex`',
    '`d-inline-block` - sets the element display property to `inline-block`',
    '`d-block` - sets the element display property to `block`',
    '`d-inline` - sets the element display property to `inline`'
  ]
}
