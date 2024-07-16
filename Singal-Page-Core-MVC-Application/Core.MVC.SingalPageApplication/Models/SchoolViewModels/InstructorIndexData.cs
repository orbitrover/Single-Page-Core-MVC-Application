using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.MVC.SingalPageApplication.Models.SchoolViewModels
{
    public class InstructorIndexData
    {
        public virtual IEnumerable<Instructor> Instructors { get; set; }
        public virtual IEnumerable<Course> Courses { get; set; }
        public virtual IEnumerable<Enrollment> Enrollments { get; set; }
    }
}
