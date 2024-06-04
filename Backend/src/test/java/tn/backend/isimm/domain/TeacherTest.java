package tn.backend.isimm.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static tn.backend.isimm.domain.TeacherTestSamples.*;

import org.junit.jupiter.api.Test;
import tn.backend.isimm.web.rest.TestUtil;

class TeacherTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Teacher.class);
        Teacher teacher1 = getTeacherSample1();
        Teacher teacher2 = new Teacher();
        assertThat(teacher1).isNotEqualTo(teacher2);

        teacher2.setId(teacher1.getId());
        assertThat(teacher1).isEqualTo(teacher2);

        teacher2 = getTeacherSample2();
        assertThat(teacher1).isNotEqualTo(teacher2);
    }
}
