import React from "react";

import Teacher from "../../../models/teacher/teacher.model";
import Subject from "../../../models/subject/subject.model"; 

import KPICard from "../../kpi-card/kpi-card.component";
import ContentCard from "../../content-card/content-card.component";
import SubjectGrades from "../../charts/subject-grades/subject-grades.component";
import StudentsSubjects from "../../charts/students-subjects/students-subjects.component";

const Dashboard: React.FC = () => {

    let teachers: Teacher[] = [
        {
            firstName: "Peter",
            lastName: "Gichia",
            totalStudents: 20,
            totalSubjects: 3,
            isActive: false
        },
        {
            firstName: "Rosemary",
            lastName: "Ouma",
            totalStudents: 15,
            totalSubjects: 2,
            isActive: true
        },
        {
            firstName: "Simon",
            lastName: "Wekesa",
            totalStudents: 28,
            totalSubjects: 4,
            isActive: true
        }
    ];

    let subjects: Subject[] = [
        {
            subjectName: "Biology",
            totalStudents: 20,
            failedStudents: 8,
            subjectTeacher: "Peter Gichia",
            avgGrade: 65.4,
            isActive: false
        },
        {
            subjectName: "Chemistry",
            totalStudents: 30,
            failedStudents: 10,
            subjectTeacher: "Simon Wekesa",
            avgGrade: 50,
            isActive: true
        }
    ];

    return <>
        <h1 className="h3 mb-4 text-gray-800">Home</h1>

        <div className="row">
            <KPICard 
                title="Students" 
                leadTitle="total"
                leadValue="48"
                subTitle="active"
                subValue="20"
                xlSize={4} 
                mdSize={4} 
            />
            <KPICard 
                title="Teachers" 
                leadTitle="total"
                leadValue={`${teachers.length}`}
                subTitle="active"
                subValue={`${teachers.length}`}
                xlSize={4} 
                mdSize={4} 
                color="success"
            />
            <KPICard 
                title="Subjects" 
                leadTitle="total"
                leadValue={`${subjects.length}`}
                subTitle="active"
                subValue={`${subjects.length}`}
                color="info"
                xlSize={4} 
                mdSize={4} 
            />
        </div>

        {/* Bar Graphs */}
        <div className="row">
            {/* First Bar Graph */}
            <div className="col-xl-6 col-lg-6">
                <ContentCard
                    title="Average grade per subject"
                >
                    <SubjectGrades />
                </ContentCard>
            </div>
            {/* Second Bar Graph */}
            <div className="col-xl-6 col-lg-6">
                <ContentCard
                    title="Category by no of subjects"
                >
                    <StudentsSubjects />
                </ContentCard>
            </div>
        </div>

        {/* Students & Subjects Tables */}
        <div className="row">
            {/* First Column Table */}
            <div className="col-xl-6 col-lg-6">
                <ContentCard 
                    title="Number of failing students per subject"
                >
                    <div className="table-responsive">
                        <table className="table table-bordered" style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Total students</th>
                                    <th>No. of failed students</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Subject</th>
                                    <th>Total students</th>
                                    <th>No. of failed students</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {subjects.map((subject, i) => (
                                    <tr key={i}>
                                        <td>{subject.subjectName}</td>
                                        <td>{subject.totalStudents}</td>
                                        <td>{subject.failedStudents}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ContentCard>
            </div>
            {/* Second Column Table */}
            <div className="col-xl-6 col-lg-6">
                <ContentCard 
                    title="Students performance per subject"
                >
                    <div className="table-responsive">
                        <table className="table table-bordered" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Subject Name</th>
                                    <th>Avg Grade</th>
                                    <th>Subject Teacher</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Subject Name</th>
                                    <th>Avg Grade</th>
                                    <th>Subject Teacher</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {subjects.map((subject, i) => (
                                    <tr key={i}>
                                        <td>{subject.subjectName}</td>
                                        <td>{subject.avgGrade}</td>
                                        <td>{subject.subjectTeacher}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ContentCard>
            </div>
        </div>

        {/* Teacher's Table */}
        <div className="row">
            <div className="col">
                <ContentCard
                    title="Number of subjects per teacher"
                >
                    <div className="table-responsive">
                        <table className="table table-bordered" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Teacher Name</th>
                                    <th>No. of subject</th>
                                    <th>No. of students</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Teacher Name</th>
                                    <th>No. of subject</th>
                                    <th>No. of students</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {teachers.map((teacher, i) => (
                                    <tr key={i}>
                                        <td>{`${teacher.firstName}  ${teacher.lastName}`}</td>
                                        <td>{teacher.totalSubjects}</td>
                                        <td>{teacher.totalStudents}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ContentCard>
            </div>
        </div>
    </>;
}

export default Dashboard;
