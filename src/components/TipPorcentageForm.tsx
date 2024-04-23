const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPorcentageFormProps ={
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPorcentageForm( {setTip, tip} : TipPorcentageFormProps ) {
  return (
    <div>
      <h2 className="font-bold text-2xl">Propinas:</h2>

      <form>
        {tipOptions.map( tipOption => (
            <div key={tipOption.id} className="flex gap-2 ">
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input 
                    type="radio" 
                    name="tip"
                    value={tipOption.value} 
                    id={tipOption.id} 
                    onChange={ e => setTip(+e.target.value)}
                    checked={ tipOption.value === tip }
                />
            </div>
        ))}
      </form>
    </div>
  )
}
