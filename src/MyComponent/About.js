import React from 'react'

export const About = () => {

         const aboutsty = {
           color: "black",
           fontSize: "20px",
           backgroundColor: "white",
           padding: "20px",
           fontFamily: "Arial",
           textAlign: "center",
         };

         const parabody = {
           color: "black",
           fontSize: "14px",
           backgroundColor: "white",
           marginTop: "85px",
           marginLeft: "100px",
           marginRight: "100px",
           fontFamily: "Arial",
           textAlign: "justify",
         };

         return (
                  <div>
                           <h1 style={aboutsty}>ABOUT</h1>
                           <p style={parabody}> It’s a list of tasks you need to complete, or things that you want to do.<br /><br />
                           One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.<br /><br />
                           When you complete a task, you can cross it off your list. This gives you a sense of progress and achievement, something you’ll lack if you’re always rushing from one task to the next. If you feel a sense of achievement, it spurs you on and motivates you to keep moving forward.<br /><br />
                           But that’s not the only benefits of a to do list. Here are a few more:<br /><br />
                           <li>Improves your memory:</li> A to do list acts as an external memory aid. It’s only possible to hold a few pieces of information at one time. Keep a to do list and you’ll be able to keep track of everything, rather than just a few of the tasks you need to do. Your to do list will also reinforce the information, which makes it less likely you’re going to forget something.
                           <br /><br />
                           <li>Increases productivity:</li> A to do list allows you to prioritize the tasks that are more important. This means you don’t waste time on tasks that don’t require your immediate attention. Your list will help you stay focused on the tasks that are the most important.
                           <br /><br />
                           <li>Helps with motivation:</li> To do lists are a great motivational tool because you can use them to clarify your goals. You can divide your long-term goal into smaller, more achievable short-term goals and as you tick each one off your list, your confidence will increase.</p>


                  </div>
         )
}
