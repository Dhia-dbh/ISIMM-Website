package tn.backend.isimm.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static tn.backend.isimm.domain.StudentTestSamples.*;

import org.junit.jupiter.api.Test;
import tn.backend.isimm.web.rest.TestUtil;

class StudentTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Student.class);
        Student student1 = getStudentSample1();
        Student student2 = new Student();
        assertThat(student1).isNotEqualTo(student2);

        student2.setId(student1.getId());
        assertThat(student1).isEqualTo(student2);

        student2 = getStudentSample2();
        assertThat(student1).isNotEqualTo(student2);
    }
}
