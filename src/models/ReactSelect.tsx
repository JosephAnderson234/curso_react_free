import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const animatedComponents = makeAnimated();

const AnimatedMulti = ()=> {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
    />
  );

}



const SampleSelect = () => (
  <Select options={options} />
)


export default function ReactSelect() {
  return (
    <div className="p-4 bg-[var(--color-background)]">
      <h1 className="text-2xl font-bold mb-4 text-[var(--color-text)]">React Select Example</h1>
      <SampleSelect />
      <AnimatedMulti />
    </div>
  );
}