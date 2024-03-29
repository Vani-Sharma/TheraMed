import React from 'react'
import Landing from '../layout/Landing'

const Mood = (props) => {
    const handleChange=(e)=>{
        console.log(e)
    }
    return (
        <>
            <div className="col-sm-8 col-lg-8 col-lg-md-8 mx-auto">
                <div className="card p-lg-3">
                    <div className="card-body">
                        <h5 className="card-title pb-3">{props.qn}</h5>
                        <div className="card-text d-flex labels">
                            {/* <label className="form-control">
                                <input type="radio" name={props.name} value="1" />Yes
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.name} value="2" />No
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.name} value="3" />May be
                            </label>

                            <label className="form-control">
                                <input type="radio" name={props.name} value="4" />Not sure
                            </label> */}
                            <select name="ques" i         
                            onChange={handleChange}>
  <option value="1">Yes</option>
  <option value="2">No</option>
  <option value="3">May be</option>
  <option value="4">Not sure</option>
</select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const Comp = () => {
    return (
        <>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up" />

                <div className="section-header">
                    <h2>Mood Tracker Quiz</h2>
                    <p>Answer these simple questions and get your mood chart !</p>
                </div>

                <form id="formid">
                    <div className="row d-grid gap-lg-5">
                        <Mood
                            name="Qn-1"
                            qn="Felt great this morning?"
                        />
                        <Mood
                            name="Qn-2"
                            qn="Feeling persistent, sad, anxious or empty mood ?"
                        />
                        <Mood
                            name="Qn-3"
                            qn="Had a loss of appetite and weight loss -or- incread appetite and weight gain ?"
                        />
                        <Mood
                            name="Qn-4"
                            qn="Loss of interest in activities you enjoyed?"
                        />
                        <Mood
                            name="Qn-5"
                            qn="Being sleepy too little or sleeping too much?"
                        />
                        <Mood
                            name="Qn-6"
                            qn="Too much bothered by feeling down, depressed, irritable, or hopeless?"
                        />
                        <Mood
                            name="Qn-7"
                            qn="Feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down?"
                        />
                        <Mood
                            name="Qn-8"
                            qn="Have you been moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual?"
                        />
                        <Mood
                            name="Qn-9"
                            qn="Had thoughts that you would be better off dead, or of hurting yourself in some way?"
                        />
                        <Mood
                            name="Qn-10"
                            qn="Do you wish to take a therapy session?"
                        />
                    </div>
                </form>

                <button type='submit'>Submit</button>

            </section>
        </>
    )
}


const Mood_Tracking = () => {
    return (
        <>
            <Landing />
            <Comp />
        </>
    )
}

export default Mood_Tracking
